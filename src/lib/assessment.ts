import { createClient } from "@/lib/supabase/client";
import {
  assessmentQuestions,
  assessmentCategories,
} from "@/data/assessment-questions";

export interface CategoryScore {
  category: string;
  score: number;
  maxPossible: number;
  rawScore: number;
  questionCount: number;
}

export interface AssessmentResult {
  id: string;
  completedAt: string;
  answers: Record<string, number>;
  categoryScores: CategoryScore[];
  overallScore: number;
}

export function calculateScores(
  answers: Record<string, number>
): CategoryScore[] {
  return assessmentCategories.map((category) => {
    const questions = assessmentQuestions.filter((q) => q.category === category);
    const rawScore = questions.reduce(
      (sum, q) => sum + (answers[q.id] || 0),
      0
    );
    const maxPossible = questions.length * 5;
    const score =
      maxPossible > 0 ? Math.round((rawScore / maxPossible) * 100) : 0;

    return {
      category,
      score,
      maxPossible,
      rawScore,
      questionCount: questions.length,
    };
  });
}

export function calculateOverallScore(categoryScores: CategoryScore[]): number {
  if (categoryScores.length === 0) return 0;
  const total = categoryScores.reduce((sum, c) => sum + c.score, 0);
  return Math.round(total / categoryScores.length);
}

export async function saveAssessmentResult(
  answers: Record<string, number>
): Promise<AssessmentResult | null> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.error("No user logged in");
    return null;
  }

  const categoryScores = calculateScores(answers);
  const overallScore = calculateOverallScore(categoryScores);

  const { data, error } = await supabase
    .from("assessments")
    .insert({
      user_id: user.id,
      overall_score: overallScore,
      category_scores: categoryScores,
      answers,
    })
    .select()
    .single();

  if (error) {
    console.error("Failed to save assessment:", error);
    return null;
  }

  return {
    id: data.id,
    completedAt: data.completed_at,
    answers: data.answers,
    categoryScores: data.category_scores,
    overallScore: data.overall_score,
  };
}

export async function getAssessmentHistory(): Promise<AssessmentResult[]> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("assessments")
    .select("*")
    .eq("user_id", user.id)
    .order("completed_at", { ascending: false });

  if (error || !data) {
    console.error("Failed to load assessments:", error);
    return [];
  }

  return data.map((row) => ({
    id: row.id,
    completedAt: row.completed_at,
    answers: row.answers,
    categoryScores: row.category_scores,
    overallScore: row.overall_score,
  }));
}

export async function getLatestAssessment(): Promise<AssessmentResult | null> {
  const history = await getAssessmentHistory();
  return history.length > 0 ? history[0] : null;
}
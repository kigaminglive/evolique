import { getLatestAssessment } from "./assessment";
import { getGoals } from "./goals";

export interface Recommendation {
  id: string;
  title: string;
  reason: string;
  actionLabel: string;
  href: string;
  priority: number;
}

export function getRecommendations(): Recommendation[] {
  const recommendations: Recommendation[] = [];
  const latest = getLatestAssessment();
  const goals = getGoals().filter((g) => g.status === "active");

  // Rule 1: No assessment yet
  if (!latest) {
    recommendations.push({
      id: "rec-assessment",
      title: "Take your Personal Development Assessment",
      reason: "You haven’t completed an assessment yet. This will help identify your strengths and focus areas.",
      actionLabel: "Start Assessment",
      href: "/assessment",
      priority: 1,
    });
  }

  // Rule 2: Low scoring categories from assessment
  if (latest) {
    const weakAreas = latest.categoryScores
      .filter((c) => c.score < 60)
      .sort((a, b) => a.score - b.score)
      .slice(0, 2);

    weakAreas.forEach((area, index) => {
      let href = "/communication";
      let actionLabel = "Explore Communication Lab";

      if (area.category.includes("Confidence")) {
        href = "/confidence";
        actionLabel = "Open Confidence Builder";
      } else if (area.category.includes("Emotional")) {
        href = "/emotional-intelligence";
        actionLabel = "Open Emotional Intelligence";
      } else if (area.category.includes("Habit") || area.category.includes("Discipline")) {
        href = "/habits";
        actionLabel = "Open Habit Tracker";
      } else if (area.category.includes("Professional") || area.category.includes("Goal")) {
        href = "/career";
        actionLabel = "Open Career Development";
      } else if (area.category.includes("Listening") || area.category.includes("Communication")) {
        href = "/communication";
        actionLabel = "Open Communication Lab";
      }

      recommendations.push({
        id: `rec-weak-${index}`,
        title: `Improve ${area.category}`,
        reason: `Your latest assessment scored ${area.score}% in ${area.category}. Focused practice can help you grow here.`,
        actionLabel,
        href,
        priority: 2 + index,
      });
    });
  }

  // Rule 3: No active goals
  if (goals.length === 0) {
    recommendations.push({
      id: "rec-goal",
      title: "Set your first personal goal",
      reason: "Clear goals help you stay consistent. Start with one small, meaningful goal.",
      actionLabel: "Set a Goal",
      href: "/goals",
      priority: 3,
    });
  }

  // Rule 4: Encourage daily practice
  recommendations.push({
    id: "rec-challenges",
    title: "Complete today’s challenges",
    reason: "Small daily challenges build consistency and confidence over time.",
    actionLabel: "View Challenges",
    href: "/challenges",
    priority: 5,
  });

  // Rule 5: Habit building
  recommendations.push({
    id: "rec-habits",
    title: "Build one small daily habit",
    reason: "Consistency matters more than intensity. One small habit can create momentum.",
    actionLabel: "Open Habit Tracker",
    href: "/habits",
    priority: 6,
  });

  // Sort by priority
  return recommendations.sort((a, b) => a.priority - b.priority);
}

export function getCoachMessage(): string {
  const latest = getLatestAssessment();
  const goals = getGoals().filter((g) => g.status === "active");

  if (!latest) {
    return "Start by taking the assessment. It will help me give you better recommendations.";
  }

  if (goals.length === 0) {
    return "You have assessment results. Setting one clear goal will help you focus your practice.";
  }

  return "Keep going. Small, consistent practice is more effective than occasional long sessions.";
}
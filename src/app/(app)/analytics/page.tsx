"use client";

import { useEffect, useState } from "react";
import Card from "@/components/ui/card";
import {
  getLatestAssessment,
  getAssessmentHistory,
  CategoryScore,
} from "@/lib/assessment";
import { getGoals } from "@/lib/goals";
import {
  getTotalXP,
  getTodayCompletedCount,
  getCompletions,
} from "@/lib/challenges";
import { getActiveHabitsCount, getHabitCompletions } from "@/lib/habits";
import { getJournalEntries } from "@/lib/journal";
import { BarChart3 } from "lucide-react";

export default function AnalyticsPage() {
  const [overallScore, setOverallScore] = useState<number | null>(null);
  const [assessmentCount, setAssessmentCount] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [todayChallenges, setTodayChallenges] = useState(0);
  const [totalChallengeCompletions, setTotalChallengeCompletions] = useState(0);
  const [activeHabits, setActiveHabits] = useState(0);
  const [habitCompletions, setHabitCompletions] = useState(0);
  const [activeGoals, setActiveGoals] = useState(0);
  const [completedGoals, setCompletedGoals] = useState(0);
  const [journalCount, setJournalCount] = useState(0);
  const [categoryScores, setCategoryScores] = useState<CategoryScore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const latest = await getLatestAssessment();
      const history = await getAssessmentHistory();
      const goals = await getGoals();
      const completions = await getCompletions();
      const habitComps = await getHabitCompletions();
      const journal = await getJournalEntries();

      setOverallScore(latest ? latest.overallScore : null);
      setAssessmentCount(history.length);
      setCategoryScores(latest ? latest.categoryScores : []);
      setTotalXP(await getTotalXP());
      setTodayChallenges(await getTodayCompletedCount());
      setTotalChallengeCompletions(completions.length);
      setActiveHabits(await getActiveHabitsCount());
      setHabitCompletions(habitComps.length);
      setActiveGoals(goals.filter((g) => g.status === "active").length);
      setCompletedGoals(goals.filter((g) => g.status === "completed").length);
      setJournalCount(journal.length);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-foreground-secondary">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Progress Analytics
        </h1>
        <p className="text-foreground-secondary">
          Overview of your actual activity and progress. No fake data.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <div className="text-sm text-foreground-secondary">Assessment Score</div>
          <div className="text-2xl font-bold text-foreground">
            {overallScore !== null ? `${overallScore}%` : "—"}
          </div>
        </Card>
        <Card>
          <div className="text-sm text-foreground-secondary">Total XP</div>
          <div className="text-2xl font-bold text-foreground">{totalXP}</div>
        </Card>
        <Card>
          <div className="text-sm text-foreground-secondary">Assessments Taken</div>
          <div className="text-2xl font-bold text-foreground">{assessmentCount}</div>
        </Card>
        <Card>
          <div className="text-sm text-foreground-secondary">Journal Entries</div>
          <div className="text-2xl font-bold text-foreground">{journalCount}</div>
        </Card>
      </div>

      {categoryScores.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Latest Assessment Breakdown
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {categoryScores.map((cat) => (
              <Card key={cat.category}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">
                    {cat.category}
                  </span>
                  <span className="text-sm font-bold text-primary">
                    {cat.score}%
                  </span>
                </div>
                <div className="w-full h-2 bg-background-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${cat.score}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      <h2 className="text-lg font-semibold text-foreground mb-4">
        Activity Summary
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <Card>
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 size={18} className="text-primary" />
            <span className="font-medium text-foreground">Challenges</span>
          </div>
          <p className="text-sm text-foreground-secondary">
            Today: {todayChallenges} completed
          </p>
          <p className="text-sm text-foreground-secondary">
            All time: {totalChallengeCompletions} completions
          </p>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 size={18} className="text-primary" />
            <span className="font-medium text-foreground">Habits</span>
          </div>
          <p className="text-sm text-foreground-secondary">
            Active habits: {activeHabits}
          </p>
          <p className="text-sm text-foreground-secondary">
            Total check-ins: {habitCompletions}
          </p>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 size={18} className="text-primary" />
            <span className="font-medium text-foreground">Goals</span>
          </div>
          <p className="text-sm text-foreground-secondary">Active: {activeGoals}</p>
          <p className="text-sm text-foreground-secondary">
            Completed: {completedGoals}
          </p>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 size={18} className="text-primary" />
            <span className="font-medium text-foreground">Reflection</span>
          </div>
          <p className="text-sm text-foreground-secondary">
            Journal entries: {journalCount}
          </p>
        </Card>
      </div>

      {overallScore === null && totalXP === 0 && (
        <Card className="bg-background-secondary border-dashed text-center py-8">
          <p className="text-foreground-secondary">
            Complete an assessment, challenges, or habits to see your analytics
            here.
          </p>
        </Card>
      )}
    </div>
  );
}
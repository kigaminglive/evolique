"use client";

import { useEffect, useState } from "react";
import Card from "@/components/ui/card";
import { getLatestAssessment } from "@/lib/assessment";
import { getTotalXP, getCompletions } from "@/lib/challenges";
import { getHabitCompletions } from "@/lib/habits";
import { getGoals } from "@/lib/goals";
import { Award } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
}

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const xp = getTotalXP();
    const assessment = getLatestAssessment();
    const challengeCount = getCompletions().length;
    const habitDays = new Set(getHabitCompletions().map((c) => c.date)).size;
    const completedGoals = getGoals().filter((g) => g.status === "completed").length;

    setAchievements([
      {
        id: "first-assessment",
        title: "Self-Aware",
        description: "Completed your first assessment",
        unlocked: !!assessment,
      },
      {
        id: "first-challenge",
        title: "First Challenge",
        description: "Completed your first daily challenge",
        unlocked: challengeCount >= 1,
      },
      {
        id: "xp-100",
        title: "Rising",
        description: "Earned 100 XP",
        unlocked: xp >= 100,
      },
      {
        id: "xp-500",
        title: "Dedicated",
        description: "Earned 500 XP",
        unlocked: xp >= 500,
      },
      {
        id: "habit-3",
        title: "Consistency Start",
        description: "Checked habits on 3 different days",
        unlocked: habitDays >= 3,
      },
      {
        id: "habit-7",
        title: "7-Day Rhythm",
        description: "Checked habits on 7 different days",
        unlocked: habitDays >= 7,
      },
      {
        id: "first-goal",
        title: "Goal Setter",
        description: "Completed your first goal",
        unlocked: completedGoals >= 1,
      },
      {
        id: "challenges-5",
        title: "Challenge Hunter",
        description: "Completed 5 challenges",
        unlocked: challengeCount >= 5,
      },
    ]);
  }, []);

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Achievements</h1>
        <p className="text-foreground-secondary">
          {unlockedCount} of {achievements.length} unlocked
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((ach) => (
          <Card
            key={ach.id}
            className={ach.unlocked ? "" : "opacity-50"}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  ach.unlocked
                    ? "bg-primary/10 text-primary"
                    : "bg-background-secondary text-foreground-secondary"
                }`}
              >
                <Award size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{ach.title}</h3>
                <p className="text-sm text-foreground-secondary">
                  {ach.description}
                </p>
                <div className="text-xs mt-1">
                  {ach.unlocked ? (
                    <span className="text-success">Unlocked</span>
                  ) : (
                    <span className="text-foreground-secondary">Locked</span>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
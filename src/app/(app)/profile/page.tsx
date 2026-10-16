"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { getLatestAssessment, AssessmentResult } from "@/lib/assessment";
import { getTotalXP, getCompletions } from "@/lib/challenges";
import { getHabitCompletions } from "@/lib/habits";
import { Edit2 } from "lucide-react";

export default function ProfilePage() {
  const { user } = useAuth();
  const [latest, setLatest] = useState<AssessmentResult | null>(null);
  const [totalXP, setTotalXP] = useState(0);
  const [streak, setStreak] = useState(0);
  const [recentActivity, setRecentActivity] = useState<
    { text: string; date: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const assessment = await getLatestAssessment();
      setLatest(assessment);

      const xp = await getTotalXP();
      setTotalXP(xp);

      const habitCompletions = await getHabitCompletions();
      const uniqueDays = new Set(habitCompletions.map((c) => c.date));
      setStreak(uniqueDays.size);

      const activity: { text: string; date: string }[] = [];

      if (assessment) {
        activity.push({
          text: "Completed Self Assessment",
          date: new Date(assessment.completedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
          }),
        });
      }

      const challengeCompletions = await getCompletions();
      if (challengeCompletions.length > 0) {
        activity.push({
          text: "Completed a Daily Challenge",
          date: new Date(
            challengeCompletions[0].completedAt
          ).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
          }),
        });
      }

      if (habitCompletions.length > 0) {
        activity.push({
          text: "Checked in a Habit",
          date: habitCompletions[habitCompletions.length - 1]?.date || "",
        });
      }

      setRecentActivity(activity.slice(0, 3));
      setLoading(false);
    }

    load();
  }, []);

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  const progressPercent = latest?.overallScore ?? 0;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-foreground-secondary">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/settings"
          className="text-sm text-foreground-secondary hover:text-foreground"
        >
          ← Settings
        </Link>
        <button className="text-sm text-primary flex items-center gap-1">
          <Edit2 size={14} />
          Edit
        </button>
      </div>

      <div className="text-center mb-8">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
          {initials}
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          {user?.name || "User"}
        </h1>
        <p className="text-foreground-secondary text-sm mt-1">{user?.email}</p>
        <p className="text-xs text-foreground-secondary mt-1">
          Account connected to Supabase
        </p>

        <div className="flex justify-center gap-3 mt-5">
          <Button size="sm" variant="outline" disabled>
            Edit Profile
          </Button>
          <Button size="sm" variant="outline" disabled>
            Share Profile
          </Button>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-foreground mb-3">Your Growth</h2>
      <div className="grid grid-cols-3 gap-3 mb-8">
        <Card className="text-center py-4">
          <div className="text-2xl font-bold text-primary">{progressPercent}%</div>
          <div className="text-xs text-foreground-secondary mt-1">Progress</div>
        </Card>
        <Card className="text-center py-4">
          <div className="text-2xl font-bold text-primary">{streak}</div>
          <div className="text-xs text-foreground-secondary mt-1">Day Streak</div>
        </Card>
        <Card className="text-center py-4">
          <div className="text-2xl font-bold text-primary">{totalXP}</div>
          <div className="text-xs text-foreground-secondary mt-1">XP</div>
        </Card>
      </div>

      {latest && latest.categoryScores.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Development Areas
          </h2>
          <Card>
            <div className="space-y-4">
              {latest.categoryScores.slice(0, 5).map((cat) => (
                <div key={cat.category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{cat.category}</span>
                    <span className="font-medium text-primary">{cat.score}%</span>
                  </div>
                  <div className="w-full h-2 bg-background-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${cat.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-3">
          Achievements
        </h2>
        <div className="flex flex-wrap gap-2">
          {totalXP > 0 && (
            <span className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              🏆 First Challenge
            </span>
          )}
          {streak >= 3 && (
            <span className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              🎯 Consistency
            </span>
          )}
          {latest && (
            <span className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              🚀 Assessment Done
            </span>
          )}
          {totalXP === 0 && !latest && (
            <span className="text-sm text-foreground-secondary">
              Complete activities to unlock achievements
            </span>
          )}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-3">
          Recent Activity
        </h2>
        {recentActivity.length === 0 ? (
          <Card className="text-center py-6">
            <p className="text-sm text-foreground-secondary">
              No recent activity yet
            </p>
          </Card>
        ) : (
          <Card className="p-0 divide-y divide-border">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-success">✓</span>
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
                <span className="text-xs text-foreground-secondary">
                  {item.date}
                </span>
              </div>
            ))}
          </Card>
        )}
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Link from "next/link";
import {
  ClipboardList,
  Target,
  BookOpen,
  TrendingUp,
  Calendar,
  Award,
} from "lucide-react";
import { getLatestAssessment, AssessmentResult } from "@/lib/assessment";
import { getTotalXP, getTodayCompletedCount } from "@/lib/challenges";
import { getActiveHabitsCount } from "@/lib/habits";

export default function DashboardPage() {
  const { user } = useAuth();
  const [latestAssessment, setLatestAssessment] =
    useState<AssessmentResult | null>(null);
  const [totalXP, setTotalXP] = useState(0);
  const [todayChallenges, setTodayChallenges] = useState(0);
  const [activeHabits, setActiveHabits] = useState(0);

  useEffect(() => {
    async function load() {
      const latest = await getLatestAssessment();
      setLatestAssessment(latest);
      setTotalXP(getTotalXP());
      setTodayChallenges(getTodayCompletedCount());
      setActiveHabits(getActiveHabitsCount());
    }
    load();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, {user?.name?.split(" ")[0] || "there"}!
        </h1>
        <p className="text-foreground-secondary">
          Continue your personal growth journey. Here&apos;s what you can do today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ClipboardList size={18} className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-foreground-secondary">Assessment</div>
              <div className="font-semibold text-foreground">
                {latestAssessment
                  ? `${latestAssessment.overallScore}%`
                  : "Not started"}
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Target size={18} className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-foreground-secondary">
                Challenges Today
              </div>
              <div className="font-semibold text-foreground">
                {todayChallenges} completed
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar size={18} className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-foreground-secondary">
                Active Habits
              </div>
              <div className="font-semibold text-foreground">{activeHabits}</div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Award size={18} className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-foreground-secondary">Total XP</div>
              <div className="font-semibold text-foreground">{totalXP} XP</div>
            </div>
          </div>
        </Card>
      </div>

      {latestAssessment && (
        <Card className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Latest Assessment Score
              </h3>
              <p className="text-sm text-foreground-secondary">
                Completed on{" "}
                {new Date(latestAssessment.completedAt).toLocaleDateString(
                  "en-IN",
                  { day: "numeric", month: "short", year: "numeric" }
                )}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-primary">
                {latestAssessment.overallScore}%
              </div>
              <Link href="/assessment/results">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      )}

      <h2 className="text-xl font-semibold text-foreground mb-4">
        Recommended Next Steps
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="flex flex-col">
          <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
            <ClipboardList size={18} />
          </div>
          <h3 className="font-semibold text-foreground mb-2">
            {latestAssessment ? "Retake Assessment" : "Take the Assessment"}
          </h3>
          <p className="text-sm text-foreground-secondary mb-4 flex-1">
            {latestAssessment
              ? "Track your improvement by taking the assessment again."
              : "Understand your current skills and get personalised recommendations."}
          </p>
          <Link href={latestAssessment ? "/assessment/take" : "/assessment"}>
            <Button className="w-full">
              {latestAssessment ? "Retake Now" : "Start Assessment"}
            </Button>
          </Link>
        </Card>

        <Card className="flex flex-col">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
            <Target size={18} />
          </div>
          <h3 className="font-semibold text-foreground mb-2">
            Daily Challenges
          </h3>
          <p className="text-sm text-foreground-secondary mb-4 flex-1">
            Complete small challenges and earn XP every day.
          </p>
          <Link href="/challenges">
            <Button variant="outline" className="w-full">
              View Challenges
            </Button>
          </Link>
        </Card>

        <Card className="flex flex-col">
          <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
            <Calendar size={18} />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Build Habits</h3>
          <p className="text-sm text-foreground-secondary mb-4 flex-1">
            Create daily habits and track your consistency.
          </p>
          <Link href="/habits">
            <Button variant="outline" className="w-full">
              Open Habit Tracker
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
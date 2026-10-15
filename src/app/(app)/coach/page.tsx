"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { getRecommendations, getCoachMessage, Recommendation } from "@/lib/coach";
import { getLatestAssessment } from "@/lib/assessment";
import { getGoals } from "@/lib/goals";
import { Lightbulb, ArrowRight } from "lucide-react";

export default function CoachPage() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [message, setMessage] = useState("");
  const [hasAssessment, setHasAssessment] = useState(false);
  const [activeGoals, setActiveGoals] = useState(0);

  useEffect(() => {
    setRecommendations(getRecommendations());
    setMessage(getCoachMessage());
    setHasAssessment(!!getLatestAssessment());
    setActiveGoals(getGoals().filter((g) => g.status === "active").length);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Personal Growth Coach
        </h1>
        <p className="text-foreground-secondary">
          Rule-based recommendations based on your assessment, goals, and activity.
          This is not a generative AI chatbot.
        </p>
      </div>

      {/* Coach Message */}
      <Card className="mb-8 bg-primary/5 border-primary/20">
        <div className="flex items-start gap-3">
          <Lightbulb size={22} className="text-primary mt-0.5" />
          <div>
            <div className="font-semibold text-foreground mb-1">Coach Note</div>
            <p className="text-foreground-secondary">{message}</p>
          </div>
        </div>
      </Card>

      {/* Quick Status */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Card>
          <div className="text-sm text-foreground-secondary">Assessment</div>
          <div className="font-semibold text-foreground">
            {hasAssessment ? "Completed" : "Not taken yet"}
          </div>
        </Card>
        <Card>
          <div className="text-sm text-foreground-secondary">Active Goals</div>
          <div className="font-semibold text-foreground">{activeGoals}</div>
        </Card>
      </div>

      {/* Recommendations */}
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Suggested Next Steps
      </h2>

      {recommendations.length === 0 ? (
        <Card className="text-center py-10">
          <p className="text-foreground-secondary">
            No specific recommendations right now. Keep practising!
          </p>
        </Card>
      ) : (
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <Card key={rec.id}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {rec.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary">{rec.reason}</p>
                </div>
                <Link href={rec.href}>
                  <Button size="sm" className="flex items-center gap-2 whitespace-nowrap">
                    {rec.actionLabel}
                    <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Transparency note */}
      <Card className="mt-8 bg-background-secondary border-dashed">
        <p className="text-sm text-foreground-secondary">
          <strong className="text-foreground">How this works:</strong> Recommendations
          are generated from simple rules using your assessment scores, active goals,
          and activity. No external AI API is used. You can improve the rules later
          or connect a real AI coach if you choose.
        </p>
      </Card>
    </div>
  );
}
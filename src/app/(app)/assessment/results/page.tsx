"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { getLatestAssessment, AssessmentResult } from "@/lib/assessment";

export default function AssessmentResultsPage() {
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const latest = await getLatestAssessment();
      setResult(latest);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-foreground-secondary">Loading results...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="max-w-xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          No Assessment Results Found
        </h1>
        <p className="text-foreground-secondary mb-6">
          You haven&apos;t completed an assessment yet.
        </p>
        <Link href="/assessment/take">
          <Button size="lg">Start Assessment</Button>
        </Link>
      </div>
    );
  }

  const strengths = result.categoryScores
    .filter((c) => c.score >= 70)
    .sort((a, b) => b.score - a.score);

  const areasToImprove = result.categoryScores
    .filter((c) => c.score < 70)
    .sort((a, b) => a.score - b.score);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Your Assessment Results
        </h1>
        <p className="text-foreground-secondary">
          Completed on{" "}
          {new Date(result.completedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      <Card className="mb-8 text-center">
        <div className="text-sm text-foreground-secondary mb-2">Overall Score</div>
        <div className="text-5xl font-bold text-primary mb-2">
          {result.overallScore}%
        </div>
        <p className="text-foreground-secondary text-sm">
          This is a self-reflection estimate, not a clinical diagnosis.
        </p>
      </Card>

      <h2 className="text-xl font-semibold text-foreground mb-4">
        Category-wise Scores
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {result.categoryScores.map((cat) => (
          <Card key={cat.category}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-foreground">{cat.category}</span>
              <span className="font-bold text-primary">{cat.score}%</span>
            </div>
            <div className="w-full h-2 bg-background-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${cat.score}%` }}
              />
            </div>
          </Card>
        ))}
      </div>

      {strengths.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Your Strengths
          </h2>
          <div className="space-y-3">
            {strengths.map((s) => (
              <Card key={s.category} className="border-success/30 bg-success/5">
                <div className="flex justify-between">
                  <span className="font-medium text-foreground">{s.category}</span>
                  <span className="text-success font-semibold">{s.score}%</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {areasToImprove.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Areas for Improvement
          </h2>
          <div className="space-y-3">
            {areasToImprove.map((a) => (
              <Card key={a.category} className="border-warning/30 bg-warning/5">
                <div className="flex justify-between">
                  <span className="font-medium text-foreground">{a.category}</span>
                  <span className="text-warning font-semibold">{a.score}%</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/assessment/take">
          <Button size="lg">Retake Assessment</Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="outline" size="lg">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
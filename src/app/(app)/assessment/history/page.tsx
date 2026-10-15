"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { getAssessmentHistory, AssessmentResult } from "@/lib/assessment";

export default function AssessmentHistoryPage() {
  const [history, setHistory] = useState<AssessmentResult[]>([]);

  useEffect(() => {
    setHistory(getAssessmentHistory());
  }, []);

  if (history.length === 0) {
    return (
      <div className="max-w-xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          No Assessment History
        </h1>
        <p className="text-foreground-secondary mb-6">
          You haven&apos;t completed any assessments yet.
        </p>
        <Link href="/assessment/take">
          <Button size="lg">Take Your First Assessment</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Assessment History
        </h1>
        <p className="text-foreground-secondary">
          All your past assessment attempts.
        </p>
      </div>

      <div className="space-y-4">
        {history.map((item, index) => (
          <Card key={item.id}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-foreground">
                  {index === 0 ? "Latest Assessment" : `Attempt #${history.length - index}`}
                </div>
                <div className="text-sm text-foreground-secondary">
                  {new Date(item.completedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-primary">
                  {item.overallScore}%
                </div>
                <Link href="/assessment/results">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
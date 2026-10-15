"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/card";
import { confidenceScenarios } from "@/data/confidence-scenarios";
import { isScenarioCompleted } from "@/lib/practice";
import { CheckCircle2, Heart } from "lucide-react";

export default function ConfidenceBuilderPage() {
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const map: Record<string, boolean> = {};
    confidenceScenarios.forEach((s) => {
      map[s.id] = isScenarioCompleted(s.id);
    });
    setCompletedMap(map);
  }, []);

  const completedCount = Object.values(completedMap).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Confidence Builder
        </h1>
        <p className="text-foreground-secondary">
          Practice realistic social and professional situations through guided scenarios.
        </p>
      </div>

      <Card className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-foreground-secondary">Your Progress</div>
            <div className="text-xl font-bold text-foreground">
              {completedCount} / {confidenceScenarios.length} scenarios completed
            </div>
          </div>
          <Heart size={24} className="text-primary" />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {confidenceScenarios.map((scenario) => {
          const done = completedMap[scenario.id];

          return (
            <Link key={scenario.id} href={`/confidence/${scenario.id}`}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Scenario
                  </span>
                  {done && <CheckCircle2 size={18} className="text-success" />}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {scenario.title}
                </h3>
                <p className="text-sm text-foreground-secondary line-clamp-2">
                  {scenario.situation}
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
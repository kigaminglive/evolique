"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/card";
import { careerResources } from "@/data/career-content";
import { isCareerResourceCompleted } from "@/lib/practice";
import { CheckCircle2, Briefcase } from "lucide-react";

export default function CareerPage() {
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const map: Record<string, boolean> = {};
    careerResources.forEach((r) => {
      map[r.id] = isCareerResourceCompleted(r.id);
    });
    setCompletedMap(map);
  }, []);

  const completedCount = Object.values(completedMap).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Career Development
        </h1>
        <p className="text-foreground-secondary">
          Prepare for interviews, improve your resume, and practise professional communication.
        </p>
      </div>

      <Card className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-foreground-secondary">Your Progress</div>
            <div className="text-xl font-bold text-foreground">
              {completedCount} / {careerResources.length} resources used
            </div>
          </div>
          <Briefcase size={24} className="text-primary" />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {careerResources.map((resource) => {
          const done = completedMap[resource.id];

          return (
            <Link key={resource.id} href={`/career/${resource.id}`}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full capitalize">
                    {resource.type}
                  </span>
                  {done && <CheckCircle2 size={18} className="text-success" />}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-foreground-secondary">
                  {resource.description}
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
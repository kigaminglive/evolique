"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/card";
import { bodyLanguageLessons } from "@/data/body-language-lessons";
import { isBodyLanguageCompleted } from "@/lib/practice";
import { CheckCircle2, Activity } from "lucide-react";

export default function BodyLanguagePage() {
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const map: Record<string, boolean> = {};
    bodyLanguageLessons.forEach((lesson) => {
      map[lesson.id] = isBodyLanguageCompleted(lesson.id);
    });
    setCompletedMap(map);
  }, []);

  const completedCount = Object.values(completedMap).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Body Language & Social Skills
        </h1>
        <p className="text-foreground-secondary">
          Learn practical posture, gestures, greetings, and meeting behaviour
          through short lessons and checklists.
        </p>
      </div>

      <Card className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-foreground-secondary">Your Progress</div>
            <div className="text-xl font-bold text-foreground">
              {completedCount} / {bodyLanguageLessons.length} lessons completed
            </div>
          </div>
          <Activity size={24} className="text-primary" />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bodyLanguageLessons.map((lesson) => {
          const done = completedMap[lesson.id];

          return (
            <Link key={lesson.id} href={`/body-language/${lesson.id}`}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Lesson
                  </span>
                  {done && <CheckCircle2 size={18} className="text-success" />}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {lesson.title}
                </h3>
                <p className="text-sm text-foreground-secondary line-clamp-2">
                  {lesson.objective}
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
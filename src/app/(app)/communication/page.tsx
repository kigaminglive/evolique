"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/card";
import { communicationLessons } from "@/data/communication-lessons";
import { isLessonCompleted } from "@/lib/practice";
import { CheckCircle2, BookOpen } from "lucide-react";

export default function CommunicationLabPage() {
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const map: Record<string, boolean> = {};
    communicationLessons.forEach((lesson) => {
      map[lesson.id] = isLessonCompleted(lesson.id);
    });
    setCompletedMap(map);
  }, []);

  const completedCount = Object.values(completedMap).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Communication Lab
        </h1>
        <p className="text-foreground-secondary">
          Practice self-introduction, conversations, listening, and public speaking
          through short structured lessons.
        </p>
      </div>

      {/* Progress */}
      <Card className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-foreground-secondary">Your Progress</div>
            <div className="text-xl font-bold text-foreground">
              {completedCount} / {communicationLessons.length} lessons completed
            </div>
          </div>
          <BookOpen size={24} className="text-primary" />
        </div>
      </Card>

      {/* Lessons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {communicationLessons.map((lesson) => {
          const done = completedMap[lesson.id];

          return (
            <Link key={lesson.id} href={`/communication/${lesson.id}`}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {lesson.category}
                  </span>
                  {done && (
                    <CheckCircle2 size={18} className="text-success" />
                  )}
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
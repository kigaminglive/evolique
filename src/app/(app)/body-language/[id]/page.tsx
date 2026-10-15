"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { bodyLanguageLessons } from "@/data/body-language-lessons";
import {
  markBodyLanguageComplete,
  isBodyLanguageCompleted,
} from "@/lib/practice";
import { ArrowLeft, Check } from "lucide-react";

export default function BodyLanguageLessonPage() {
  const params = useParams();
  const lessonId = params.id as string;
  const lesson = bodyLanguageLessons.find((l) => l.id === lessonId);

  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (lessonId) {
      setCompleted(isBodyLanguageCompleted(lessonId));
    }
  }, [lessonId]);

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <p className="text-foreground-secondary mb-4">Lesson not found.</p>
        <Link href="/body-language">
          <Button>Back to Body Language</Button>
        </Link>
      </div>
    );
  }

  function toggleCheck(index: number) {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  function handleComplete() {
    markBodyLanguageComplete(lessonId);
    setCompleted(true);
  }

  const allChecked = lesson.checklist.every((_, i) => checked[i]);

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/body-language"
        className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground mb-6"
      >
        <ArrowLeft size={16} />
        Back to Body Language
      </Link>

      <h1 className="text-3xl font-bold text-foreground mb-6">{lesson.title}</h1>

      {/* Objective */}
      <Card className="mb-6">
        <h2 className="font-semibold text-foreground mb-2">Learning Objective</h2>
        <p className="text-foreground-secondary">{lesson.objective}</p>
      </Card>

      {/* Explanation */}
      <Card className="mb-6">
        <h2 className="font-semibold text-foreground mb-2">Explanation</h2>
        <p className="text-foreground-secondary leading-relaxed">
          {lesson.explanation}
        </p>
      </Card>

      {/* Key Points */}
      <Card className="mb-6">
        <h2 className="font-semibold text-foreground mb-3">Key Points</h2>
        <ul className="space-y-2">
          {lesson.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-foreground-secondary">
              <span className="text-primary mt-1">•</span>
              {point}
            </li>
          ))}
        </ul>
      </Card>

      {/* Exercise */}
      <Card className="mb-6">
        <h2 className="font-semibold text-foreground mb-2">Practice Exercise</h2>
        <p className="text-foreground-secondary">{lesson.exercise}</p>
      </Card>

      {/* Checklist */}
      <Card className="mb-6">
        <h2 className="font-semibold text-foreground mb-4">Self-Check Checklist</h2>
        <div className="space-y-3">
          {lesson.checklist.map((item, index) => (
            <button
              key={index}
              onClick={() => toggleCheck(index)}
              className="flex items-center gap-3 w-full text-left"
            >
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  checked[index]
                    ? "bg-success border-success text-white"
                    : "border-border"
                }`}
              >
                {checked[index] && <Check size={12} />}
              </div>
              <span
                className={
                  checked[index]
                    ? "text-foreground-secondary line-through"
                    : "text-foreground"
                }
              >
                {item}
              </span>
            </button>
          ))}
        </div>
      </Card>

      {/* Complete Button */}
      {completed ? (
        <div className="p-4 rounded-lg bg-success/10 text-success font-medium text-center">
          Lesson marked as completed
        </div>
      ) : (
        <Button onClick={handleComplete} disabled={!allChecked} size="lg">
          Mark as Completed
        </Button>
      )}
    </div>
  );
}
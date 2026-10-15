"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { communicationLessons } from "@/data/communication-lessons";
import {
  savePracticeAttempt,
  getAttemptsForLesson,
  PracticeAttempt,
} from "@/lib/practice";
import { ArrowLeft } from "lucide-react";

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params.id as string;

  const lesson = communicationLessons.find((l) => l.id === lessonId);
  const [answer, setAnswer] = useState("");
  const [attempts, setAttempts] = useState<PracticeAttempt[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (lessonId) {
      setAttempts(getAttemptsForLesson(lessonId));
    }
  }, [lessonId]);

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <p className="text-foreground-secondary mb-4">Lesson not found.</p>
        <Link href="/communication">
          <Button>Back to Communication Lab</Button>
        </Link>
      </div>
    );
  }

  function handleSave() {
    if (!answer.trim()) return;
    savePracticeAttempt(lessonId, answer.trim());
    setAttempts(getAttemptsForLesson(lessonId));
    setAnswer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/communication"
        className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground mb-6"
      >
        <ArrowLeft size={16} />
        Back to Communication Lab
      </Link>

      <div className="mb-2 text-sm font-medium text-primary">{lesson.category}</div>
      <h1 className="text-3xl font-bold text-foreground mb-4">{lesson.title}</h1>

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

      {/* Example */}
      <Card className="mb-6">
        <h2 className="font-semibold text-foreground mb-2">Example</h2>
        <p className="text-foreground-secondary italic leading-relaxed">
          {lesson.example}
        </p>
      </Card>

      {/* Exercise */}
      <Card className="mb-6">
        <h2 className="font-semibold text-foreground mb-2">Your Exercise</h2>
        <p className="text-foreground-secondary mb-4">{lesson.exercise}</p>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={5}
          className="w-full border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary mb-4"
          placeholder="Write your practice answer here..."
        />

        <div className="flex items-center gap-3">
          <Button onClick={handleSave} disabled={!answer.trim()}>
            Save Practice
          </Button>
          {saved && (
            <span className="text-sm text-success font-medium">Saved!</span>
          )}
        </div>
      </Card>

      {/* Sample Response */}
      {lesson.sampleResponse && (
        <Card className="mb-6 bg-background-secondary">
          <h2 className="font-semibold text-foreground mb-2">Sample Response</h2>
          <p className="text-foreground-secondary italic">
            {lesson.sampleResponse}
          </p>
        </Card>
      )}

      {/* Previous Attempts */}
      {attempts.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Your Previous Attempts
          </h2>
          <div className="space-y-3">
            {attempts.map((attempt) => (
              <Card key={attempt.id}>
                <div className="text-xs text-foreground-secondary mb-2">
                  {new Date(attempt.completedAt).toLocaleString("en-IN")}
                </div>
                <p className="text-foreground-secondary whitespace-pre-wrap">
                  {attempt.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
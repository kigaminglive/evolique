"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { assessmentQuestions } from "@/data/assessment-questions";
import { saveAssessmentResult } from "@/lib/assessment";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TakeAssessmentPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [saving, setSaving] = useState(false);

  const currentQuestion = assessmentQuestions[currentIndex];
  const totalQuestions = assessmentQuestions.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const isAnswered = answers[currentQuestion.id] !== undefined;

  function handleSelect(value: number) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  }

  async function handleNext() {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    setSaving(true);
    const result = await saveAssessmentResult(answers);
    setSaving(false);

    if (result) {
      router.push("/assessment/results");
    } else {
      alert("Could not save assessment. Please try again.");
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-foreground-secondary mb-2">
          <span>
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-background-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Category */}
      <div className="text-sm font-medium text-primary mb-2">
        {currentQuestion.category}
      </div>

      {/* Question */}
      <Card className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          {currentQuestion.text}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = answers[currentQuestion.id] === option.value;

            return (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                  isSelected
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border hover:border-primary/50 text-foreground-secondary hover:text-foreground"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0 || saving}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Previous
        </Button>

        <Button
          onClick={handleNext}
          disabled={!isAnswered || saving}
          className="flex items-center gap-2"
        >
          {saving
            ? "Saving..."
            : currentIndex === totalQuestions - 1
              ? "Finish"
              : "Next"}
          {!saving && <ArrowRight size={16} />}
        </Button>
      </div>
    </div>
  );
}
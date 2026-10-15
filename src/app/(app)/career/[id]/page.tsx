"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { careerResources } from "@/data/career-content";
import {
  saveCareerPractice,
  getCareerPracticeFor,
  CareerPractice,
  toggleCareerChecklistItem,
  isCareerChecklistItemDone,
} from "@/lib/practice";
import { ArrowLeft, Check } from "lucide-react";

export default function CareerResourcePage() {
  const params = useParams();
  const resourceId = params.id as string;
  const resource = careerResources.find((r) => r.id === resourceId);

  const [answer, setAnswer] = useState("");
  const [attempts, setAttempts] = useState<CareerPractice[]>([]);
  const [saved, setSaved] = useState(false);
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (resourceId) {
      setAttempts(getCareerPracticeFor(resourceId));
    }
    if (resource?.type === "checklist" && resource.tips) {
      const map: Record<string, boolean> = {};
      resource.tips.forEach((tip) => {
        map[tip] = isCareerChecklistItemDone(tip);
      });
      setChecklistState(map);
    }
  }, [resourceId, resource]);

  if (!resource) {
    return (
      <div className="text-center py-20">
        <p className="text-foreground-secondary mb-4">Resource not found.</p>
        <Link href="/career">
          <Button>Back to Career Development</Button>
        </Link>
      </div>
    );
  }

  function handleSave() {
    if (!answer.trim()) return;
    saveCareerPractice(resourceId, answer.trim());
    setAttempts(getCareerPracticeFor(resourceId));
    setAnswer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleChecklistToggle(item: string) {
    toggleCareerChecklistItem(item);
    setChecklistState((prev) => ({ ...prev, [item]: !prev[item] }));
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/career"
        className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground mb-6"
      >
        <ArrowLeft size={16} />
        Back to Career Development
      </Link>

      <div className="mb-2 text-sm font-medium text-primary capitalize">
        {resource.type}
      </div>
      <h1 className="text-3xl font-bold text-foreground mb-6">{resource.title}</h1>

      {/* Content */}
      <Card className="mb-6">
        <h2 className="font-semibold text-foreground mb-2">Overview</h2>
        <p className="text-foreground-secondary leading-relaxed whitespace-pre-wrap">
          {resource.content}
        </p>
      </Card>

      {/* Tips */}
      {resource.tips && resource.type !== "checklist" && (
        <Card className="mb-6">
          <h2 className="font-semibold text-foreground mb-3">Tips</h2>
          <ul className="space-y-2">
            {resource.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground-secondary">
                <span className="text-primary mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Checklist Type */}
      {resource.type === "checklist" && resource.tips && (
        <Card className="mb-6">
          <h2 className="font-semibold text-foreground mb-4">Checklist</h2>
          <div className="space-y-3">
            {resource.tips.map((item) => (
              <button
                key={item}
                onClick={() => handleChecklistToggle(item)}
                className="flex items-center gap-3 w-full text-left"
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    checklistState[item]
                      ? "bg-success border-success text-white"
                      : "border-border"
                  }`}
                >
                  {checklistState[item] && <Check size={12} />}
                </div>
                <span
                  className={
                    checklistState[item]
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
      )}

      {/* Practice Exercise */}
      {resource.exercise && (
        <Card className="mb-6">
          <h2 className="font-semibold text-foreground mb-2">Your Practice</h2>
          <p className="text-foreground-secondary mb-4">{resource.exercise}</p>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={6}
            className="w-full border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary mb-4"
            placeholder="Write your answer here..."
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
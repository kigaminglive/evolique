"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { confidenceScenarios } from "@/data/confidence-scenarios";
import { saveScenarioAttempt } from "@/lib/practice";
import { ArrowLeft } from "lucide-react";

export default function ScenarioPage() {
  const params = useParams();
  const scenarioId = params.id as string;
  const scenario = confidenceScenarios.find((s) => s.id === scenarioId);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [reflection, setReflection] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!scenario) {
    return (
      <div className="text-center py-20">
        <p className="text-foreground-secondary mb-4">Scenario not found.</p>
        <Link href="/confidence">
          <Button>Back to Confidence Builder</Button>
        </Link>
      </div>
    );
  }

  const selected = scenario.options.find((o) => o.id === selectedOption);

  function handleSubmit() {
    if (!selectedOption) return;
    saveScenarioAttempt(scenarioId, selectedOption, reflection.trim());
    setSubmitted(true);
  }

  function handleRetry() {
    setSelectedOption(null);
    setReflection("");
    setSubmitted(false);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/confidence"
        className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground mb-6"
      >
        <ArrowLeft size={16} />
        Back to Confidence Builder
      </Link>

      <h1 className="text-3xl font-bold text-foreground mb-6">{scenario.title}</h1>

      {/* Situation */}
      <Card className="mb-6">
        <h2 className="font-semibold text-foreground mb-2">Situation</h2>
        <p className="text-foreground-secondary leading-relaxed">
          {scenario.situation}
        </p>
      </Card>

      {!submitted ? (
        <>
          {/* Options */}
          <Card className="mb-6">
            <h2 className="font-semibold text-foreground mb-4">
              How would you respond?
            </h2>
            <div className="space-y-3">
              {scenario.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                    selectedOption === option.id
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border hover:border-primary/50 text-foreground-secondary"
                  }`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </Card>

          {/* Reflection */}
          <Card className="mb-6">
            <h2 className="font-semibold text-foreground mb-2">
              Quick Reflection
            </h2>
            <p className="text-sm text-foreground-secondary mb-3">
              {scenario.reflectionPrompt}
            </p>
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              rows={3}
              className="w-full border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Write a short reflection (optional)..."
            />
          </Card>

          <Button onClick={handleSubmit} disabled={!selectedOption} size="lg">
            See Feedback
          </Button>
        </>
      ) : (
        <>
          {/* Feedback */}
          <Card className="mb-6">
            <h2 className="font-semibold text-foreground mb-2">Your Choice</h2>
            <p className="text-foreground-secondary mb-4">{selected?.text}</p>

            <h2 className="font-semibold text-foreground mb-2">Feedback</h2>
            <p
              className={`leading-relaxed ${
                selected?.isBetter ? "text-success" : "text-foreground-secondary"
              }`}
            >
              {selected?.feedback}
            </p>
          </Card>

          {reflection && (
            <Card className="mb-6">
              <h2 className="font-semibold text-foreground mb-2">Your Reflection</h2>
              <p className="text-foreground-secondary">{reflection}</p>
            </Card>
          )}

          <div className="flex gap-3">
            <Button onClick={handleRetry} variant="outline">
              Try Again
            </Button>
            <Link href="/confidence">
              <Button>Back to Scenarios</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
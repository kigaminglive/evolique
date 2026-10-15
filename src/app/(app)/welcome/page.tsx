"use client";

import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { ClipboardList, Target, BookOpen } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Welcome to Evolique
      </h1>
      <p className="text-foreground-secondary mb-8">
        Your journey to a better you starts with small, consistent steps.
      </p>

      <div className="space-y-4 mb-8">
        <Card>
          <div className="flex items-start gap-3">
            <ClipboardList className="text-primary mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-foreground">1. Take the Assessment</h3>
              <p className="text-sm text-foreground-secondary">
                Understand your current strengths and focus areas.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-3">
            <Target className="text-primary mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-foreground">2. Set One Goal</h3>
              <p className="text-sm text-foreground-secondary">
                Choose one skill you want to improve first.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-3">
            <BookOpen className="text-primary mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-foreground">3. Start Practising</h3>
              <p className="text-sm text-foreground-secondary">
                Use lessons, challenges, and scenarios daily.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/assessment">
          <Button size="lg">Start Assessment</Button>
        </Link>
        <Link href="/dashboard">
          <Button size="lg" variant="outline">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
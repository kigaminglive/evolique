"use client";

import { useEffect, useState } from "react";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import {
  dailyChallenges,
  completeChallenge,
  isChallengeCompletedToday,
  getTotalXP,
  getTodayCompletedCount,
  Challenge,
} from "@/lib/challenges";
import { CheckCircle2, Circle, Zap } from "lucide-react";

export default function ChallengesPage() {
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});
  const [totalXP, setTotalXP] = useState(0);
  const [todayCount, setTodayCount] = useState(0);
  const [message, setMessage] = useState("");

  function refresh() {
    const map: Record<string, boolean> = {};
    dailyChallenges.forEach((c) => {
      map[c.id] = isChallengeCompletedToday(c.id);
    });
    setCompletedMap(map);
    setTotalXP(getTotalXP());
    setTodayCount(getTodayCompletedCount());
  }

  useEffect(() => {
    refresh();
  }, []);

  function handleComplete(challenge: Challenge) {
    const success = completeChallenge(challenge);
    if (success) {
      setMessage(`+${challenge.xp} XP earned!`);
      setTimeout(() => setMessage(""), 2500);
      refresh();
    } else {
      setMessage("Already completed today");
      setTimeout(() => setMessage(""), 2000);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Daily Challenges</h1>
        <p className="text-foreground-secondary">
          Complete small challenges every day to build real skills and earn XP.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Card>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap size={18} className="text-primary" />
            </div>
            <div>
              <div className="text-sm text-foreground-secondary">Total XP</div>
              <div className="text-xl font-bold text-foreground">{totalXP} XP</div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle2 size={18} className="text-success" />
            </div>
            <div>
              <div className="text-sm text-foreground-secondary">Today Completed</div>
              <div className="text-xl font-bold text-foreground">
                {todayCount} / {dailyChallenges.length}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Message */}
      {message && (
        <div className="mb-6 p-3 rounded-lg bg-primary/10 text-primary text-center font-medium">
          {message}
        </div>
      )}

      {/* Challenge List */}
      <div className="space-y-4">
        {dailyChallenges.map((challenge) => {
          const done = completedMap[challenge.id];

          return (
            <Card
              key={challenge.id}
              className={done ? "border-success/40 bg-success/5" : ""}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {done ? (
                    <CheckCircle2 size={22} className="text-success" />
                  ) : (
                    <Circle size={22} className="text-foreground-secondary" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">
                      {challenge.title}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      +{challenge.xp} XP
                    </span>
                  </div>
                  <p className="text-sm text-foreground-secondary mb-2">
                    {challenge.description}
                  </p>
                  <div className="text-xs text-foreground-secondary">
                    {challenge.category}
                  </div>
                </div>

                {!done && (
                  <Button size="sm" onClick={() => handleComplete(challenge)}>
                    Complete
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
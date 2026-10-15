export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: string;
  xp: number;
  type: "daily" | "weekly";
}

export interface ChallengeCompletion {
  challengeId: string;
  completedAt: string;
  xpEarned: number;
}

export const dailyChallenges: Challenge[] = [
  {
    id: "daily-1",
    title: "Introduce yourself in 3 sentences",
    description: "Write a short and clear self-introduction. Practice saying it out loud.",
    category: "Communication",
    xp: 20,
    type: "daily",
  },
  {
    id: "daily-2",
    title: "Practice active listening",
    description: "In your next conversation, focus fully on the other person without interrupting.",
    category: "Listening",
    xp: 15,
    type: "daily",
  },
  {
    id: "daily-3",
    title: "Write one weekly goal",
    description: "Write down one clear goal you want to achieve this week.",
    category: "Goal Setting",
    xp: 15,
    type: "daily",
  },
  {
    id: "daily-4",
    title: "Practice a 1-minute presentation",
    description: "Pick any topic and speak about it for 1 minute. Record yourself if possible.",
    category: "Confidence",
    xp: 25,
    type: "daily",
  },
  {
    id: "daily-5",
    title: "Reflect on a difficult conversation",
    description: "Think about a recent difficult conversation. What went well? What could improve?",
    category: "Emotional Awareness",
    xp: 20,
    type: "daily",
  },
];

export function getCompletions(): ChallengeCompletion[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("evolique_challenge_completions");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveCompletions(completions: ChallengeCompletion[]) {
  localStorage.setItem("evolique_challenge_completions", JSON.stringify(completions));
}

export function completeChallenge(challenge: Challenge): boolean {
  const completions = getCompletions();
  const today = new Date().toDateString();

  // Prevent duplicate completion on the same day
  const alreadyDone = completions.some(
    (c) =>
      c.challengeId === challenge.id &&
      new Date(c.completedAt).toDateString() === today
  );

  if (alreadyDone) return false;

  completions.unshift({
    challengeId: challenge.id,
    completedAt: new Date().toISOString(),
    xpEarned: challenge.xp,
  });

  saveCompletions(completions);
  return true;
}

export function getTotalXP(): number {
  const completions = getCompletions();
  return completions.reduce((sum, c) => sum + c.xpEarned, 0);
}

export function isChallengeCompletedToday(challengeId: string): boolean {
  const completions = getCompletions();
  const today = new Date().toDateString();

  return completions.some(
    (c) =>
      c.challengeId === challengeId &&
      new Date(c.completedAt).toDateString() === today
  );
}

export function getTodayCompletedCount(): number {
  const completions = getCompletions();
  const today = new Date().toDateString();

  return completions.filter(
    (c) => new Date(c.completedAt).toDateString() === today
  ).length;
}
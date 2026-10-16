import { createClient } from "@/lib/supabase/client";

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
    description:
      "Write a short and clear self-introduction. Practice saying it out loud.",
    category: "Communication",
    xp: 20,
    type: "daily",
  },
  {
    id: "daily-2",
    title: "Practice active listening",
    description:
      "In your next conversation, focus fully on the other person without interrupting.",
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
    description:
      "Pick any topic and speak about it for 1 minute. Record yourself if possible.",
    category: "Confidence",
    xp: 25,
    type: "daily",
  },
  {
    id: "daily-5",
    title: "Reflect on a difficult conversation",
    description:
      "Think about a recent difficult conversation. What went well? What could improve?",
    category: "Emotional Awareness",
    xp: 20,
    type: "daily",
  },
];

export async function getCompletions(): Promise<ChallengeCompletion[]> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("challenge_completions")
    .select("*")
    .eq("user_id", user.id)
    .order("completed_at", { ascending: false });

  if (error || !data) return [];

  return data.map((row) => ({
    challengeId: row.challenge_id,
    completedAt: row.completed_at,
    xpEarned: row.xp_earned,
  }));
}

export async function completeChallenge(
  challenge: Challenge
): Promise<boolean> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;

  const today = new Date().toDateString();
  const completions = await getCompletions();
  const alreadyDone = completions.some(
    (c) =>
      c.challengeId === challenge.id &&
      new Date(c.completedAt).toDateString() === today
  );
  if (alreadyDone) return false;

  const { error } = await supabase.from("challenge_completions").insert({
    user_id: user.id,
    challenge_id: challenge.id,
    xp_earned: challenge.xp,
  });

  if (error) {
    console.error("completeChallenge error:", error);
    return false;
  }
  return true;
}

export async function getTotalXP(): Promise<number> {
  const completions = await getCompletions();
  return completions.reduce((sum, c) => sum + c.xpEarned, 0);
}

export async function isChallengeCompletedToday(
  challengeId: string
): Promise<boolean> {
  const completions = await getCompletions();
  const today = new Date().toDateString();
  return completions.some(
    (c) =>
      c.challengeId === challengeId &&
      new Date(c.completedAt).toDateString() === today
  );
}

export async function getTodayCompletedCount(): Promise<number> {
  const completions = await getCompletions();
  const today = new Date().toDateString();
  return completions.filter(
    (c) => new Date(c.completedAt).toDateString() === today
  ).length;
}
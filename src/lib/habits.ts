import { createClient } from "@/lib/supabase/client";

export interface Habit {
  id: string;
  name: string;
  description: string;
  frequency: "daily" | "weekly";
  createdAt: string;
}

export interface HabitCompletion {
  habitId: string;
  date: string;
}

export async function getHabits(): Promise<Habit[]> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("habits")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id,
    name: row.name,
    description: row.description || "",
    frequency: (row.frequency as "daily" | "weekly") || "daily",
    createdAt: row.created_at,
  }));
}

export async function addHabit(
  name: string,
  description: string
): Promise<Habit | null> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("habits")
    .insert({
      user_id: user.id,
      name,
      description,
      frequency: "daily",
    })
    .select()
    .single();

  if (error || !data) {
    console.error("addHabit error:", error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    description: data.description || "",
    frequency: "daily",
    createdAt: data.created_at,
  };
}

export async function deleteHabit(id: string) {
  const supabase = createClient();
  await supabase.from("habits").delete().eq("id", id);
}

export async function getHabitCompletions(): Promise<HabitCompletion[]> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("habit_completions")
    .select("habit_id, date")
    .eq("user_id", user.id);

  if (error || !data) return [];

  return data.map((row) => ({
    habitId: row.habit_id,
    date: row.date,
  }));
}

export async function toggleHabitCompletion(habitId: string, date: string) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  const { data: existing } = await supabase
    .from("habit_completions")
    .select("id")
    .eq("user_id", user.id)
    .eq("habit_id", habitId)
    .eq("date", date)
    .maybeSingle();

  if (existing) {
    await supabase.from("habit_completions").delete().eq("id", existing.id);
  } else {
    await supabase.from("habit_completions").insert({
      user_id: user.id,
      habit_id: habitId,
      date,
    });
  }
}

export async function isHabitCompletedOn(
  habitId: string,
  date: string
): Promise<boolean> {
  const completions = await getHabitCompletions();
  return completions.some((c) => c.habitId === habitId && c.date === date);
}

export function getTodayDate(): string {
  return new Date().toISOString().split("T")[0];
}

export async function getActiveHabitsCount(): Promise<number> {
  const habits = await getHabits();
  return habits.length;
}
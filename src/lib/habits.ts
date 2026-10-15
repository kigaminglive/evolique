export interface Habit {
  id: string;
  name: string;
  description: string;
  frequency: "daily" | "weekly";
  createdAt: string;
}

export interface HabitCompletion {
  habitId: string;
  date: string; // YYYY-MM-DD
}

export function getHabits(): Habit[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("evolique_habits");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveHabits(habits: Habit[]) {
  localStorage.setItem("evolique_habits", JSON.stringify(habits));
}

export function addHabit(name: string, description: string): Habit {
  const newHabit: Habit = {
    id: Date.now().toString(),
    name,
    description,
    frequency: "daily",
    createdAt: new Date().toISOString(),
  };
  const habits = getHabits();
  habits.unshift(newHabit);
  saveHabits(habits);
  return newHabit;
}

export function deleteHabit(id: string) {
  const habits = getHabits().filter((h) => h.id !== id);
  saveHabits(habits);

  // Also remove its completions
  const completions = getHabitCompletions().filter((c) => c.habitId !== id);
  saveHabitCompletions(completions);
}

export function getHabitCompletions(): HabitCompletion[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("evolique_habit_completions");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveHabitCompletions(completions: HabitCompletion[]) {
  localStorage.setItem("evolique_habit_completions", JSON.stringify(completions));
}

export function toggleHabitCompletion(habitId: string, date: string) {
  const completions = getHabitCompletions();
  const exists = completions.find(
    (c) => c.habitId === habitId && c.date === date
  );

  if (exists) {
    // Uncomplete
    saveHabitCompletions(
      completions.filter((c) => !(c.habitId === habitId && c.date === date))
    );
  } else {
    // Complete
    completions.push({ habitId, date });
    saveHabitCompletions(completions);
  }
}

export function isHabitCompletedOn(habitId: string, date: string): boolean {
  return getHabitCompletions().some(
    (c) => c.habitId === habitId && c.date === date
  );
}

export function getTodayDate(): string {
  return new Date().toISOString().split("T")[0]; // YYYY-MM-DD
}

export function getActiveHabitsCount(): number {
  return getHabits().length;
}
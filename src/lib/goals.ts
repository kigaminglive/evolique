export interface Goal {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "active" | "completed";
  createdAt: string;
  completedAt?: string;
}

export function getGoals(): Goal[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("evolique_goals");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveGoals(goals: Goal[]) {
  localStorage.setItem("evolique_goals", JSON.stringify(goals));
}

export function addGoal(title: string, description: string, category: string): Goal {
  const newGoal: Goal = {
    id: Date.now().toString(),
    title,
    description,
    category,
    status: "active",
    createdAt: new Date().toISOString(),
  };

  const goals = getGoals();
  goals.unshift(newGoal);
  saveGoals(goals);
  return newGoal;
}

export function completeGoal(id: string) {
  const goals = getGoals();
  const updated = goals.map((g) =>
    g.id === id
      ? { ...g, status: "completed" as const, completedAt: new Date().toISOString() }
      : g
  );
  saveGoals(updated);
}

export function deleteGoal(id: string) {
  const goals = getGoals().filter((g) => g.id !== id);
  saveGoals(goals);
}
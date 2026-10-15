"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import {
  getGoals,
  addGoal,
  completeGoal,
  deleteGoal,
  Goal,
} from "@/lib/goals";
import { Plus, Check, Trash2 } from "lucide-react";

const categories = [
  "Communication",
  "Confidence",
  "Habits",
  "Career",
  "Emotional Intelligence",
  "Other",
];

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Communication");
  const [loading, setLoading] = useState(true);

  async function refresh() {
    const data = await getGoals();
    setGoals(data);
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleAddGoal(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    await addGoal(title.trim(), description.trim(), category);
    setTitle("");
    setDescription("");
    setShowForm(false);
    await refresh();
  }

  async function handleComplete(id: string) {
    await completeGoal(id);
    await refresh();
  }

  async function handleDelete(id: string) {
    await deleteGoal(id);
    await refresh();
  }

  const activeGoals = goals.filter((g) => g.status === "active");
  const completedGoals = goals.filter((g) => g.status === "completed");

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-foreground-secondary">Loading goals...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Personal Goals
          </h1>
          <p className="text-foreground-secondary">
            Set clear goals and track your progress.
          </p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2"
        >
          <Plus size={16} />
          Add Goal
        </Button>
      </div>

      {showForm && (
        <Card className="mb-8">
          <form onSubmit={handleAddGoal} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Goal Title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g. Improve public speaking"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Description (optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Why is this goal important to you?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-3">
              <Button type="submit">Save Goal</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      <h2 className="text-lg font-semibold text-foreground mb-4">
        Active Goals ({activeGoals.length})
      </h2>

      {activeGoals.length === 0 ? (
        <Card className="mb-8 text-center py-8">
          <p className="text-foreground-secondary">
            No active goals yet. Click “Add Goal” to create your first one.
          </p>
        </Card>
      ) : (
        <div className="space-y-3 mb-10">
          {activeGoals.map((goal) => (
            <Card key={goal.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium text-foreground">{goal.title}</div>
                  {goal.description && (
                    <p className="text-sm text-foreground-secondary mt-1">
                      {goal.description}
                    </p>
                  )}
                  <div className="text-xs text-primary mt-2">{goal.category}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleComplete(goal.id)}
                    className="p-2 rounded-lg hover:bg-success/10 text-success"
                    title="Mark as completed"
                  >
                    <Check size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(goal.id)}
                    className="p-2 rounded-lg hover:bg-error/10 text-error"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {completedGoals.length > 0 && (
        <>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Completed ({completedGoals.length})
          </h2>
          <div className="space-y-3">
            {completedGoals.map((goal) => (
              <Card key={goal.id} className="opacity-70">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-medium text-foreground line-through">
                      {goal.title}
                    </div>
                    <div className="text-xs text-success mt-1">Completed</div>
                  </div>
                  <button
                    onClick={() => handleDelete(goal.id)}
                    className="p-2 rounded-lg hover:bg-error/10 text-error"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import {
  getHabits,
  addHabit,
  deleteHabit,
  toggleHabitCompletion,
  isHabitCompletedOn,
  getTodayDate,
  Habit,
} from "@/lib/habits";
import { Plus, Trash2, Check } from "lucide-react";

export default function HabitsPage() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});

  const today = getTodayDate();

  function refresh() {
    const allHabits = getHabits();
    setHabits(allHabits);

    const map: Record<string, boolean> = {};
    allHabits.forEach((h) => {
      map[h.id] = isHabitCompletedOn(h.id, today);
    });
    setCompletedMap(map);
  }

  useEffect(() => {
    refresh();
  }, []);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;

    addHabit(name.trim(), description.trim());
    setName("");
    setDescription("");
    setShowForm(false);
    refresh();
  }

  function handleToggle(habitId: string) {
    toggleHabitCompletion(habitId, today);
    refresh();
  }

  function handleDelete(id: string) {
    deleteHabit(id);
    refresh();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Habit Tracker
          </h1>
          <p className="text-foreground-secondary">
            Build consistency with small daily habits.
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2">
          <Plus size={16} />
          Add Habit
        </Button>
      </div>

      {/* Add Form */}
      {showForm && (
        <Card className="mb-8">
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Habit Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g. Read 10 pages"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Description (optional)
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Why this habit matters"
              />
            </div>

            <div className="flex gap-3">
              <Button type="submit">Save Habit</Button>
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Habits List */}
      {habits.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-foreground-secondary mb-4">
            No habits yet. Start with one small daily habit.
          </p>
          <Button onClick={() => setShowForm(true)}>Add Your First Habit</Button>
        </Card>
      ) : (
        <div className="space-y-3">
          {habits.map((habit) => {
            const done = completedMap[habit.id];

            return (
              <Card
                key={habit.id}
                className={done ? "border-success/40 bg-success/5" : ""}
              >
                <div className="flex items-center gap-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => handleToggle(habit.id)}
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                      done
                        ? "bg-success border-success text-white"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {done && <Check size={14} />}
                  </button>

                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`font-medium ${
                        done ? "text-foreground-secondary line-through" : "text-foreground"
                      }`}
                    >
                      {habit.name}
                    </div>
                    {habit.description && (
                      <p className="text-sm text-foreground-secondary">
                        {habit.description}
                      </p>
                    )}
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(habit.id)}
                    className="p-2 rounded-lg hover:bg-error/10 text-error"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
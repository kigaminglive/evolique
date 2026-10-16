"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import {
  getJournalEntries,
  addJournalEntry,
  updateJournalEntry,
  deleteJournalEntry,
  emotionOptions,
  JournalEntry,
} from "@/lib/journal";
import { Plus, Trash2, Edit2, Brain } from "lucide-react";

export default function EmotionalIntelligencePage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [emotion, setEmotion] = useState("Calm");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  async function refresh() {
    const data = await getJournalEntries();
    setEntries(data);
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  function resetForm() {
    setEmotion("Calm");
    setTitle("");
    setContent("");
    setEditingId(null);
    setShowForm(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (editingId) {
      await updateJournalEntry(
        editingId,
        emotion,
        title.trim(),
        content.trim()
      );
    } else {
      await addJournalEntry(emotion, title.trim(), content.trim());
    }

    await refresh();
    resetForm();
  }

  function handleEdit(entry: JournalEntry) {
    setEditingId(entry.id);
    setEmotion(entry.emotion);
    setTitle(entry.title);
    setContent(entry.content);
    setShowForm(true);
  }

  async function handleDelete(id: string) {
    if (confirm("Delete this journal entry?")) {
      await deleteJournalEntry(id);
      await refresh();
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-foreground-secondary">Loading journal...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Emotional Intelligence
          </h1>
          <p className="text-foreground-secondary">
            Reflect on your emotions and build self-awareness through journaling.
          </p>
        </div>
        <Button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="flex items-center gap-2"
        >
          <Plus size={16} />
          New Entry
        </Button>
      </div>

      <Card className="mb-6 bg-background-secondary border-dashed">
        <div className="flex items-start gap-3">
          <Brain size={18} className="text-primary mt-0.5" />
          <div className="text-sm text-foreground-secondary">
            <strong className="text-foreground">Privacy note:</strong> Your
            journal entries are private to your account and stored securely.
            This is a reflection tool, not therapy.
          </div>
        </div>
      </Card>

      {showForm && (
        <Card className="mb-8">
          <h2 className="font-semibold text-foreground mb-4">
            {editingId ? "Edit Entry" : "New Journal Entry"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                How are you feeling?
              </label>
              <select
                value={emotion}
                onChange={(e) => setEmotion(e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {emotionOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Short title for this entry"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Reflection
              </label>
              <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className="w-full border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="What happened? What did you feel? What did you learn?"
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit">
                {editingId ? "Update Entry" : "Save Entry"}
              </Button>
              <Button type="button" variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {entries.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-foreground-secondary mb-4">
            No journal entries yet. Start by writing a short reflection.
          </p>
          <Button onClick={() => setShowForm(true)}>Write First Entry</Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {entries.map((entry) => (
            <Card key={entry.id}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {entry.emotion}
                    </span>
                    <span className="text-xs text-foreground-secondary">
                      {new Date(entry.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary whitespace-pre-wrap">
                    {entry.content}
                  </p>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleEdit(entry)}
                    className="p-2 rounded-lg hover:bg-background-secondary text-foreground-secondary"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="p-2 rounded-lg hover:bg-error/10 text-error"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
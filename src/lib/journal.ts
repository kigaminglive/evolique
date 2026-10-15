export interface JournalEntry {
  id: string;
  emotion: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export const emotionOptions = [
  "Happy",
  "Calm",
  "Grateful",
  "Anxious",
  "Frustrated",
  "Sad",
  "Confused",
  "Motivated",
  "Tired",
  "Other",
];

export function getJournalEntries(): JournalEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("evolique_journal");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveJournalEntries(entries: JournalEntry[]) {
  localStorage.setItem("evolique_journal", JSON.stringify(entries));
}

export function addJournalEntry(
  emotion: string,
  title: string,
  content: string
): JournalEntry {
  const now = new Date().toISOString();
  const entry: JournalEntry = {
    id: Date.now().toString(),
    emotion,
    title,
    content,
    createdAt: now,
    updatedAt: now,
  };

  const entries = getJournalEntries();
  entries.unshift(entry);
  saveJournalEntries(entries);
  return entry;
}

export function updateJournalEntry(
  id: string,
  emotion: string,
  title: string,
  content: string
) {
  const entries = getJournalEntries().map((e) =>
    e.id === id
      ? { ...e, emotion, title, content, updatedAt: new Date().toISOString() }
      : e
  );
  saveJournalEntries(entries);
}

export function deleteJournalEntry(id: string) {
  const entries = getJournalEntries().filter((e) => e.id !== id);
  saveJournalEntries(entries);
}
import { createClient } from "@/lib/supabase/client";

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

export async function getJournalEntries(): Promise<JournalEntry[]> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("journal_entries")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id,
    emotion: row.emotion,
    title: row.title,
    content: row.content,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }));
}

export async function addJournalEntry(
  emotion: string,
  title: string,
  content: string
): Promise<JournalEntry | null> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("journal_entries")
    .insert({
      user_id: user.id,
      emotion,
      title,
      content,
    })
    .select()
    .single();

  if (error || !data) {
    console.error("addJournalEntry error:", error);
    return null;
  }

  return {
    id: data.id,
    emotion: data.emotion,
    title: data.title,
    content: data.content,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}

export async function updateJournalEntry(
  id: string,
  emotion: string,
  title: string,
  content: string
) {
  const supabase = createClient();
  await supabase
    .from("journal_entries")
    .update({
      emotion,
      title,
      content,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);
}

export async function deleteJournalEntry(id: string) {
  const supabase = createClient();
  await supabase.from("journal_entries").delete().eq("id", id);
}
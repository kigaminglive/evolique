export interface PracticeAttempt {
  id: string;
  lessonId: string;
  content: string;
  completedAt: string;
}

export interface ScenarioAttempt {
  id: string;
  scenarioId: string;
  selectedOptionId: string;
  reflection: string;
  completedAt: string;
}

export function getPracticeAttempts(): PracticeAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("evolique_practice");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function savePracticeAttempt(lessonId: string, content: string): PracticeAttempt {
  const attempt: PracticeAttempt = {
    id: Date.now().toString(),
    lessonId,
    content,
    completedAt: new Date().toISOString(),
  };

  const attempts = getPracticeAttempts();
  attempts.unshift(attempt);
  localStorage.setItem("evolique_practice", JSON.stringify(attempts));
  return attempt;
}

export function getAttemptsForLesson(lessonId: string): PracticeAttempt[] {
  return getPracticeAttempts().filter((a) => a.lessonId === lessonId);
}

export function isLessonCompleted(lessonId: string): boolean {
  return getAttemptsForLesson(lessonId).length > 0;
}

// --- Scenario (Confidence Builder) ---

export function getScenarioAttempts(): ScenarioAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("evolique_scenario_attempts");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveScenarioAttempt(
  scenarioId: string,
  selectedOptionId: string,
  reflection: string
): ScenarioAttempt {
  const attempt: ScenarioAttempt = {
    id: Date.now().toString(),
    scenarioId,
    selectedOptionId,
    reflection,
    completedAt: new Date().toISOString(),
  };

  const attempts = getScenarioAttempts();
  attempts.unshift(attempt);
  localStorage.setItem("evolique_scenario_attempts", JSON.stringify(attempts));
  return attempt;
}

export function isScenarioCompleted(scenarioId: string): boolean {
  return getScenarioAttempts().some((a) => a.scenarioId === scenarioId);
}

// --- Body Language ---

export function getBodyLanguageCompletions(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("evolique_body_language");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function markBodyLanguageComplete(lessonId: string) {
  const completed = getBodyLanguageCompletions();
  if (!completed.includes(lessonId)) {
    completed.push(lessonId);
    localStorage.setItem("evolique_body_language", JSON.stringify(completed));
  }
}

export function isBodyLanguageCompleted(lessonId: string): boolean {
  return getBodyLanguageCompletions().includes(lessonId);
}

// --- Career ---

export interface CareerPractice {
  id: string;
  resourceId: string;
  content: string;
  completedAt: string;
}

export function getCareerPractice(): CareerPractice[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("evolique_career_practice");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveCareerPractice(resourceId: string, content: string): CareerPractice {
  const entry: CareerPractice = {
    id: Date.now().toString(),
    resourceId,
    content,
    completedAt: new Date().toISOString(),
  };
  const all = getCareerPractice();
  all.unshift(entry);
  localStorage.setItem("evolique_career_practice", JSON.stringify(all));
  return entry;
}

export function getCareerPracticeFor(resourceId: string): CareerPractice[] {
  return getCareerPractice().filter((p) => p.resourceId === resourceId);
}

export function isCareerResourceCompleted(resourceId: string): boolean {
  return getCareerPracticeFor(resourceId).length > 0;
}

export function getCareerChecklist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("evolique_career_checklist");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function toggleCareerChecklistItem(item: string) {
  const current = getCareerChecklist();
  const updated = current.includes(item)
    ? current.filter((i) => i !== item)
    : [...current, item];
  localStorage.setItem("evolique_career_checklist", JSON.stringify(updated));
}

export function isCareerChecklistItemDone(item: string): boolean {
  return getCareerChecklist().includes(item);
}
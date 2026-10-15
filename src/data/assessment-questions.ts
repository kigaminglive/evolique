export interface Question {
  id: string;
  category: string;
  text: string;
  options: {
    value: number;
    label: string;
  }[];
}

export const assessmentCategories = [
  "Communication",
  "Confidence",
  "Listening",
  "Teamwork",
  "Habits & Consistency",
  "Emotional Awareness",
  "Professional Readiness",
  "Goal Setting",
] as const;

export const assessmentQuestions: Question[] = [
  // Communication
  {
    id: "comm-1",
    category: "Communication",
    text: "How comfortable are you expressing your thoughts clearly in a group?",
    options: [
      { value: 1, label: "Very uncomfortable" },
      { value: 2, label: "Somewhat uncomfortable" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Somewhat comfortable" },
      { value: 5, label: "Very comfortable" },
    ],
  },
  {
    id: "comm-2",
    category: "Communication",
    text: "How often do you hesitate before speaking in meetings or class?",
    options: [
      { value: 5, label: "Almost never" },
      { value: 4, label: "Rarely" },
      { value: 3, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 1, label: "Almost always" },
    ],
  },
  {
    id: "comm-3",
    category: "Communication",
    text: "How well can you explain a complex idea in simple words?",
    options: [
      { value: 1, label: "Very poorly" },
      { value: 2, label: "Poorly" },
      { value: 3, label: "Average" },
      { value: 4, label: "Well" },
      { value: 5, label: "Very well" },
    ],
  },
  {
    id: "comm-4",
    category: "Communication",
    text: "How comfortable are you giving constructive feedback to others?",
    options: [
      { value: 1, label: "Very uncomfortable" },
      { value: 2, label: "Somewhat uncomfortable" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Somewhat comfortable" },
      { value: 5, label: "Very comfortable" },
    ],
  },
  {
    id: "comm-5",
    category: "Communication",
    text: "How effectively do you handle disagreements in conversations?",
    options: [
      { value: 1, label: "Very ineffectively" },
      { value: 2, label: "Ineffectively" },
      { value: 3, label: "Average" },
      { value: 4, label: "Effectively" },
      { value: 5, label: "Very effectively" },
    ],
  },

  // Confidence
  {
    id: "conf-1",
    category: "Confidence",
    text: "How confident do you feel when meeting new people?",
    options: [
      { value: 1, label: "Not confident at all" },
      { value: 2, label: "Slightly confident" },
      { value: 3, label: "Moderately confident" },
      { value: 4, label: "Quite confident" },
      { value: 5, label: "Very confident" },
    ],
  },
  {
    id: "conf-2",
    category: "Confidence",
    text: "How often do you avoid situations because of fear of judgment?",
    options: [
      { value: 5, label: "Almost never" },
      { value: 4, label: "Rarely" },
      { value: 3, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 1, label: "Almost always" },
    ],
  },
  {
    id: "conf-3",
    category: "Confidence",
    text: "How comfortable are you sharing your opinions even if they differ from others?",
    options: [
      { value: 1, label: "Very uncomfortable" },
      { value: 2, label: "Somewhat uncomfortable" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Somewhat comfortable" },
      { value: 5, label: "Very comfortable" },
    ],
  },
  {
    id: "conf-4",
    category: "Confidence",
    text: "How well do you recover after making a mistake in front of others?",
    options: [
      { value: 1, label: "Very poorly" },
      { value: 2, label: "Poorly" },
      { value: 3, label: "Average" },
      { value: 4, label: "Well" },
      { value: 5, label: "Very well" },
    ],
  },
  {
    id: "conf-5",
    category: "Confidence",
    text: "How confident do you feel while giving a short presentation?",
    options: [
      { value: 1, label: "Not confident at all" },
      { value: 2, label: "Slightly confident" },
      { value: 3, label: "Moderately confident" },
      { value: 4, label: "Quite confident" },
      { value: 5, label: "Very confident" },
    ],
  },

  // Listening
  {
    id: "list-1",
    category: "Listening",
    text: "How often do you interrupt others while they are speaking?",
    options: [
      { value: 5, label: "Almost never" },
      { value: 4, label: "Rarely" },
      { value: 3, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 1, label: "Almost always" },
    ],
  },
  {
    id: "list-2",
    category: "Listening",
    text: "How well do you remember key points from a conversation?",
    options: [
      { value: 1, label: "Very poorly" },
      { value: 2, label: "Poorly" },
      { value: 3, label: "Average" },
      { value: 4, label: "Well" },
      { value: 5, label: "Very well" },
    ],
  },
  {
    id: "list-3",
    category: "Listening",
    text: "How often do you ask clarifying questions to understand better?",
    options: [
      { value: 1, label: "Almost never" },
      { value: 2, label: "Rarely" },
      { value: 3, label: "Sometimes" },
      { value: 4, label: "Often" },
      { value: 5, label: "Almost always" },
    ],
  },
  {
    id: "list-4",
    category: "Listening",
    text: "How present do you feel during conversations (not distracted)?",
    options: [
      { value: 1, label: "Rarely present" },
      { value: 2, label: "Sometimes present" },
      { value: 3, label: "Moderately present" },
      { value: 4, label: "Mostly present" },
      { value: 5, label: "Fully present" },
    ],
  },

  // Teamwork
  {
    id: "team-1",
    category: "Teamwork",
    text: "How comfortable are you working in a team with different personalities?",
    options: [
      { value: 1, label: "Very uncomfortable" },
      { value: 2, label: "Somewhat uncomfortable" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Somewhat comfortable" },
      { value: 5, label: "Very comfortable" },
    ],
  },
  {
    id: "team-2",
    category: "Teamwork",
    text: "How well do you share credit for team successes?",
    options: [
      { value: 1, label: "Very poorly" },
      { value: 2, label: "Poorly" },
      { value: 3, label: "Average" },
      { value: 4, label: "Well" },
      { value: 5, label: "Very well" },
    ],
  },
  {
    id: "team-3",
    category: "Teamwork",
    text: "How effectively do you handle conflicts within a team?",
    options: [
      { value: 1, label: "Very ineffectively" },
      { value: 2, label: "Ineffectively" },
      { value: 3, label: "Average" },
      { value: 4, label: "Effectively" },
      { value: 5, label: "Very effectively" },
    ],
  },
  {
    id: "team-4",
    category: "Teamwork",
    text: "How reliable are you in completing your part of team tasks on time?",
    options: [
      { value: 1, label: "Rarely reliable" },
      { value: 2, label: "Sometimes reliable" },
      { value: 3, label: "Moderately reliable" },
      { value: 4, label: "Mostly reliable" },
      { value: 5, label: "Always reliable" },
    ],
  },

  // Habits & Consistency
  {
    id: "hab-1",
    category: "Habits & Consistency",
    text: "How consistent are you with daily routines you set for yourself?",
    options: [
      { value: 1, label: "Not consistent at all" },
      { value: 2, label: "Slightly consistent" },
      { value: 3, label: "Moderately consistent" },
      { value: 4, label: "Quite consistent" },
      { value: 5, label: "Very consistent" },
    ],
  },
  {
    id: "hab-2",
    category: "Habits & Consistency",
    text: "How often do you follow through on plans you make?",
    options: [
      { value: 1, label: "Almost never" },
      { value: 2, label: "Rarely" },
      { value: 3, label: "Sometimes" },
      { value: 4, label: "Often" },
      { value: 5, label: "Almost always" },
    ],
  },
  {
    id: "hab-3",
    category: "Habits & Consistency",
    text: "How well do you recover after missing a day of a habit?",
    options: [
      { value: 1, label: "Very poorly" },
      { value: 2, label: "Poorly" },
      { value: 3, label: "Average" },
      { value: 4, label: "Well" },
      { value: 5, label: "Very well" },
    ],
  },
  {
    id: "hab-4",
    category: "Habits & Consistency",
    text: "How disciplined are you with time management?",
    options: [
      { value: 1, label: "Not disciplined" },
      { value: 2, label: "Slightly disciplined" },
      { value: 3, label: "Moderately disciplined" },
      { value: 4, label: "Quite disciplined" },
      { value: 5, label: "Very disciplined" },
    ],
  },

  // Emotional Awareness
  {
    id: "emo-1",
    category: "Emotional Awareness",
    text: "How well can you identify what emotion you are feeling in the moment?",
    options: [
      { value: 1, label: "Very poorly" },
      { value: 2, label: "Poorly" },
      { value: 3, label: "Average" },
      { value: 4, label: "Well" },
      { value: 5, label: "Very well" },
    ],
  },
  {
    id: "emo-2",
    category: "Emotional Awareness",
    text: "How often do you pause before reacting when you feel strong emotions?",
    options: [
      { value: 1, label: "Almost never" },
      { value: 2, label: "Rarely" },
      { value: 3, label: "Sometimes" },
      { value: 4, label: "Often" },
      { value: 5, label: "Almost always" },
    ],
  },
  {
    id: "emo-3",
    category: "Emotional Awareness",
    text: "How well do you understand how your mood affects others?",
    options: [
      { value: 1, label: "Very poorly" },
      { value: 2, label: "Poorly" },
      { value: 3, label: "Average" },
      { value: 4, label: "Well" },
      { value: 5, label: "Very well" },
    ],
  },
  {
    id: "emo-4",
    category: "Emotional Awareness",
    text: "How comfortable are you talking about your feelings with someone you trust?",
    options: [
      { value: 1, label: "Very uncomfortable" },
      { value: 2, label: "Somewhat uncomfortable" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Somewhat comfortable" },
      { value: 5, label: "Very comfortable" },
    ],
  },

  // Professional Readiness
  {
    id: "prof-1",
    category: "Professional Readiness",
    text: "How prepared do you feel for a job interview right now?",
    options: [
      { value: 1, label: "Not prepared at all" },
      { value: 2, label: "Slightly prepared" },
      { value: 3, label: "Moderately prepared" },
      { value: 4, label: "Quite prepared" },
      { value: 5, label: "Very prepared" },
    ],
  },
  {
    id: "prof-2",
    category: "Professional Readiness",
    text: "How confident are you in writing a clear professional email?",
    options: [
      { value: 1, label: "Not confident" },
      { value: 2, label: "Slightly confident" },
      { value: 3, label: "Moderately confident" },
      { value: 4, label: "Quite confident" },
      { value: 5, label: "Very confident" },
    ],
  },
  {
    id: "prof-3",
    category: "Professional Readiness",
    text: "How well can you introduce yourself professionally in 30–60 seconds?",
    options: [
      { value: 1, label: "Very poorly" },
      { value: 2, label: "Poorly" },
      { value: 3, label: "Average" },
      { value: 4, label: "Well" },
      { value: 5, label: "Very well" },
    ],
  },
  {
    id: "prof-4",
    category: "Professional Readiness",
    text: "How comfortable are you networking with professionals or seniors?",
    options: [
      { value: 1, label: "Very uncomfortable" },
      { value: 2, label: "Somewhat uncomfortable" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Somewhat comfortable" },
      { value: 5, label: "Very comfortable" },
    ],
  },

  // Goal Setting
  {
    id: "goal-1",
    category: "Goal Setting",
    text: "How clear are your current personal or career goals?",
    options: [
      { value: 1, label: "Not clear at all" },
      { value: 2, label: "Slightly clear" },
      { value: 3, label: "Moderately clear" },
      { value: 4, label: "Quite clear" },
      { value: 5, label: "Very clear" },
    ],
  },
  {
    id: "goal-2",
    category: "Goal Setting",
    text: "How often do you break big goals into smaller actionable steps?",
    options: [
      { value: 1, label: "Almost never" },
      { value: 2, label: "Rarely" },
      { value: 3, label: "Sometimes" },
      { value: 4, label: "Often" },
      { value: 5, label: "Almost always" },
    ],
  },
  {
    id: "goal-3",
    category: "Goal Setting",
    text: "How regularly do you review your progress toward your goals?",
    options: [
      { value: 1, label: "Almost never" },
      { value: 2, label: "Rarely" },
      { value: 3, label: "Sometimes" },
      { value: 4, label: "Often" },
      { value: 5, label: "Almost always" },
    ],
  },
  {
    id: "goal-4",
    category: "Goal Setting",
    text: "How well do you adjust your plans when things don't go as expected?",
    options: [
      { value: 1, label: "Very poorly" },
      { value: 2, label: "Poorly" },
      { value: 3, label: "Average" },
      { value: 4, label: "Well" },
      { value: 5, label: "Very well" },
    ],
  },
];
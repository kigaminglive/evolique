export interface BodyLanguageLesson {
  id: string;
  title: string;
  objective: string;
  explanation: string;
  keyPoints: string[];
  exercise: string;
  checklist: string[];
}

export const bodyLanguageLessons: BodyLanguageLesson[] = [
  {
    id: "bl-posture",
    title: "Listening Posture",
    objective: "Learn a simple, respectful posture that shows you are paying attention.",
    explanation:
      "Good listening posture is open and calm. Keep your shoulders relaxed, face the speaker, and avoid crossing your arms tightly. Small nods can show you are engaged.",
    keyPoints: [
      "Face the speaker when possible",
      "Keep arms relaxed (not tightly crossed)",
      "Maintain comfortable eye contact",
      "Nod occasionally to show understanding",
    ],
    exercise:
      "In your next conversation, notice your posture. Try to keep an open and relaxed position for at least 2 minutes.",
    checklist: [
      "I faced the speaker",
      "My arms were relaxed",
      "I made comfortable eye contact",
      "I nodded at least once",
    ],
  },
  {
    id: "bl-gestures",
    title: "Appropriate Gestures",
    objective: "Use simple hand gestures that support your words without distraction.",
    explanation:
      "Natural hand movements can make speech clearer. Avoid pointing aggressively or fidgeting too much. Keep gestures within a comfortable range near your body.",
    keyPoints: [
      "Use open hand gestures when explaining",
      "Avoid pointing directly at people",
      "Keep movements calm and purposeful",
      "Don’t overuse the same gesture",
    ],
    exercise:
      "Practice explaining a simple topic (like your favourite subject) while using 2–3 calm hand gestures.",
    checklist: [
      "I used open hand movements",
      "I avoided aggressive pointing",
      "My gestures matched what I was saying",
      "I did not fidget excessively",
    ],
  },
  {
    id: "bl-greetings",
    title: "Greetings & Introductions",
    objective: "Make a friendly and respectful first impression.",
    explanation:
      "A simple greeting with a smile, appropriate eye contact, and a clear introduction creates a positive start. Match the formality of the situation.",
    keyPoints: [
      "Smile genuinely when appropriate",
      "Make brief eye contact",
      "Say your name clearly",
      "Match the formality of the setting",
    ],
    exercise:
      "Write and practice a 10-second greeting you can use when meeting someone new in college or at work.",
    checklist: [
      "I smiled naturally",
      "I made brief eye contact",
      "I said my name clearly",
      "My tone matched the situation",
    ],
  },
  {
    id: "bl-meeting",
    title: "Professional Meeting Etiquette",
    objective: "Show respect and presence in formal or semi-formal meetings.",
    explanation:
      "In meetings, arrive on time, put your phone away, sit upright, and listen actively. When speaking, keep your points brief and clear.",
    keyPoints: [
      "Arrive on time",
      "Phone on silent / away",
      "Sit upright and attentive",
      "Speak briefly and clearly when needed",
    ],
    exercise:
      "Before your next class or meeting, prepare one clear point you might share if asked.",
    checklist: [
      "I was on time",
      "My phone was not distracting",
      "I sat attentively",
      "I spoke clearly if I contributed",
    ],
  },
  {
    id: "bl-online",
    title: "Online Meeting Behaviour",
    objective: "Appear present and professional in video calls.",
    explanation:
      "In online meetings, camera position, lighting, background, and muted microphone when not speaking all matter. Look at the camera occasionally to create connection.",
    keyPoints: [
      "Camera at eye level if possible",
      "Mute when not speaking",
      "Look at the camera sometimes",
      "Avoid multitasking visibly",
    ],
    exercise:
      "Check your camera angle and background before your next online class or call.",
    checklist: [
      "Camera was at a reasonable height",
      "I muted when not speaking",
      "I looked toward the camera at times",
      "I avoided obvious multitasking",
    ],
  },
  {
    id: "bl-space",
    title: "Personal Space & Respect",
    objective: "Understand and respect comfortable physical distance.",
    explanation:
      "People have different comfort zones. In most professional and college settings, keep a respectful distance and notice if the other person steps back.",
    keyPoints: [
      "Keep a comfortable distance",
      "Notice if someone steps back",
      "Avoid unnecessary physical contact",
      "Respect cultural differences",
    ],
    exercise:
      "In your next few interactions, notice the distance others prefer and adjust accordingly.",
    checklist: [
      "I kept a respectful distance",
      "I noticed others’ comfort cues",
      "I avoided unwelcome contact",
      "I adapted when needed",
    ],
  },
];
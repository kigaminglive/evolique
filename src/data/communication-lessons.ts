export interface Lesson {
  id: string;
  title: string;
  objective: string;
  explanation: string;
  example: string;
  exercise: string;
  sampleResponse?: string;
  category: string;
}

export const communicationLessons: Lesson[] = [
  {
    id: "comm-intro",
    title: "Self-Introduction",
    objective: "Learn how to introduce yourself clearly and confidently in 30–60 seconds.",
    explanation:
      "A good self-introduction includes your name, what you do or study, and one interesting or relevant detail. Keep it short, natural, and positive.",
    example:
      "Hi, I’m Rohan. I’m a second-year computer science student who enjoys building simple web projects and learning about personal growth.",
    exercise:
      "Write your own 3–4 sentence self-introduction. Then read it out loud once.",
    sampleResponse:
      "Hello, I’m Priya. I’m currently studying business and I’m particularly interested in communication and leadership skills.",
    category: "Communication",
  },
  {
    id: "comm-everyday",
    title: "Everyday Conversation",
    objective: "Start and continue simple everyday conversations more comfortably.",
    explanation:
      "Good conversations often start with open questions and genuine interest. Listen more than you speak, and follow up on what the other person says.",
    example:
      "Instead of only saying “How are you?”, you can ask “How has your week been so far?” or “What are you working on these days?”",
    exercise:
      "Write 5 open-ended questions you can use to start or continue a conversation with a classmate or colleague.",
    category: "Communication",
  },
  {
    id: "comm-listening",
    title: "Active Listening",
    objective: "Practice listening fully without interrupting or planning your reply.",
    explanation:
      "Active listening means giving full attention, showing you understand, and responding thoughtfully. Avoid interrupting and try to summarise what you heard.",
    example:
      "You can say: “So what you’re saying is that the deadline feels tight because of the extra assignment?”",
    exercise:
      "In your next conversation, focus only on listening. Afterwards, write 3 things the other person said.",
    category: "Listening",
  },
  {
    id: "comm-public",
    title: "Short Public Speaking",
    objective: "Speak clearly for 1–2 minutes on a simple topic.",
    explanation:
      "Structure helps: Start with a simple opening, share 2–3 main points, and end with a short conclusion. Speak slowly and pause between ideas.",
    example:
      "Topic: My favourite hobby. Opening → Why I like it → One experience → Conclusion.",
    exercise:
      "Choose any simple topic and write a 1-minute speech structure (opening, 2 points, ending).",
    sampleResponse:
      "Opening: Today I want to talk about reading. Point 1: It helps me learn new ideas. Point 2: It improves my focus. Ending: That’s why I try to read a little every day.",
    category: "Public Speaking",
  },
  {
    id: "comm-story",
    title: "Simple Storytelling",
    objective: "Share a short personal story in a clear structure.",
    explanation:
      "A simple story has a beginning (situation), middle (what happened), and end (what you learned or felt).",
    example:
      "Last month I had to present in class. I was nervous, but I practised twice. In the end I felt more confident.",
    exercise:
      "Write a short story (5–7 sentences) about a time you tried something new.",
    category: "Storytelling",
  },
  {
    id: "comm-interview",
    title: "Basic Interview Answer",
    objective: "Answer the question “Tell me about yourself” in a structured way.",
    explanation:
      "Use a simple structure: Present (who you are now) → Past (relevant background) → Future (what you want).",
    example:
      "I’m currently a final-year student majoring in commerce. Over the last two years I’ve worked on group projects and improved my communication. I’m now looking for opportunities where I can keep growing.",
    exercise:
      "Write your own answer to “Tell me about yourself” in 4–6 sentences.",
    category: "Interview",
  },
];
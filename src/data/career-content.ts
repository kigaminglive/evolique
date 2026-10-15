export interface CareerResource {
  id: string;
  title: string;
  type: "guide" | "practice" | "checklist";
  description: string;
  content: string;
  exercise?: string;
  tips?: string[];
}

export const careerResources: CareerResource[] = [
  {
    id: "career-resume",
    title: "Resume Basics",
    type: "guide",
    description: "Build a clear, honest, and professional resume structure.",
    content:
      "A strong student resume is simple and truthful. Include: Contact info, Education, Projects, Skills, and any relevant experience or extracurriculars. Avoid fake achievements. Use clear bullet points and consistent formatting.",
    tips: [
      "Keep it to 1 page if possible",
      "Use action verbs (Built, Designed, Organised)",
      "Quantify where you can (e.g. “Led a team of 4”)",
      "Never invent experience or certificates",
    ],
    exercise:
      "Write 3–4 bullet points describing one project or responsibility you actually had.",
  },
  {
    id: "career-linkedin",
    title: "LinkedIn Profile Improvement",
    type: "guide",
    description: "Make your LinkedIn profile clear and professional.",
    content:
      "A good LinkedIn profile has a clear photo, a simple headline, a short About section, and honest experience/education. Write in first person and focus on what you are learning and building.",
    tips: [
      "Use a clear, professional-looking photo",
      "Headline: role/student + interest (e.g. “CS Student | Interested in Web Development”)",
      "About section: 3–5 short sentences",
      "Add real projects and skills only",
    ],
    exercise:
      "Write a 4-sentence About section for your LinkedIn profile.",
  },
  {
    id: "career-star",
    title: "STAR Method for Interviews",
    type: "practice",
    description: "Answer behavioural questions using Situation, Task, Action, Result.",
    content:
      "STAR helps you structure answers clearly:\n\n• Situation – Brief context\n• Task – What you needed to do\n• Action – What you actually did\n• Result – What happened / what you learned\n\nKeep answers focused and honest.",
    tips: [
      "Keep Situation + Task short",
      "Focus most time on Action",
      "End with a clear Result or learning",
      "Use real examples only",
    ],
    exercise:
      "Pick one real experience and write a STAR answer for: “Tell me about a time you worked in a team.”",
  },
  {
    id: "career-intro",
    title: "Professional Self-Introduction",
    type: "practice",
    description: "Prepare a 30–60 second professional introduction.",
    content:
      "A professional introduction usually covers:\n1. Who you are (name + current role/student)\n2. What you are focusing on\n3. One relevant strength or interest\n4. What you are looking for (optional)",
    exercise:
      "Write your 30–60 second professional introduction.",
  },
  {
    id: "career-interview-q",
    title: "Common Interview Questions",
    type: "practice",
    description: "Practice answers to frequently asked questions.",
    content:
      "Common questions include:\n• Tell me about yourself\n• Why do you want this role/internship?\n• What is your strength / weakness?\n• Tell me about a challenge you faced\n• Where do you see yourself in 2–3 years?\n\nPrepare honest, structured answers. Avoid memorising word-for-word.",
    exercise:
      "Write a short answer to: “What is one strength you bring to a team?”",
  },
  {
    id: "career-checklist",
    title: "Career Preparation Checklist",
    type: "checklist",
    description: "Track your basic career readiness steps.",
    content:
      "Use this checklist to track important preparation activities. Complete them at your own pace.",
    tips: [
      "Update resume with real information only",
      "Write a clear LinkedIn About section",
      "Prepare 2–3 STAR stories from real experiences",
      "Practice a 60-second introduction",
      "Research one company or role you are interested in",
      "Prepare 2 questions to ask in an interview",
    ],
  },
];
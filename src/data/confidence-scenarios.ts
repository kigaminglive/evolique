export interface ScenarioOption {
  id: string;
  text: string;
  feedback: string;
  isBetter: boolean;
}

export interface Scenario {
  id: string;
  title: string;
  situation: string;
  options: ScenarioOption[];
  reflectionPrompt: string;
}

export const confidenceScenarios: Scenario[] = [
  {
    id: "conf-first-day",
    title: "First Day at College",
    situation:
      "It’s your first day at college. You don’t know anyone yet. A group of students is talking nearby. You want to join the conversation but feel nervous.",
    options: [
      {
        id: "a",
        text: "Stand quietly nearby and wait for someone to notice you.",
        feedback:
          "This is safe but passive. You might wait a long time. Taking a small step yourself usually works better.",
        isBetter: false,
      },
      {
        id: "b",
        text: "Smile, walk closer, and say “Hi, I’m new here. Mind if I join?”",
        feedback:
          "Good approach. A simple, friendly introduction shows confidence and makes it easy for others to respond.",
        isBetter: true,
      },
      {
        id: "c",
        text: "Avoid the group completely and sit alone.",
        feedback:
          "This protects you from discomfort but also stops you from making new connections. Small social risks help build confidence over time.",
        isBetter: false,
      },
    ],
    reflectionPrompt:
      "What would make it easier for you to start a conversation with new people?",
  },
  {
    id: "conf-group-discussion",
    title: "Speaking in a Group Discussion",
    situation:
      "In a class group discussion, everyone is sharing ideas. You have a thought but you’re worried it might sound wrong.",
    options: [
      {
        id: "a",
        text: "Stay silent to avoid saying something incorrect.",
        feedback:
          "Silence feels safe, but it also means your ideas are never heard. Most discussions welcome imperfect contributions.",
        isBetter: false,
      },
      {
        id: "b",
        text: "Share your thought simply: “I was thinking… what if we also consider this?”",
        feedback:
          "Clear and low-pressure. Framing it as a contribution rather than a final answer reduces fear of being wrong.",
        isBetter: true,
      },
      {
        id: "c",
        text: "Wait until the discussion is almost over and then speak very quickly.",
        feedback:
          "Rushing at the end often makes you more nervous. Speaking earlier, even briefly, is usually better practice.",
        isBetter: false,
      },
    ],
    reflectionPrompt:
      "What is one small phrase you can use to enter a group discussion more easily?",
  },
  {
    id: "conf-ask-question",
    title: "Asking a Question in Class",
    situation:
      "The teacher is explaining something. You didn’t fully understand one part. You want to ask but feel others might judge you.",
    options: [
      {
        id: "a",
        text: "Stay quiet and try to figure it out later alone.",
        feedback:
          "This is common, but asking in the moment often saves time and helps other students who have the same doubt.",
        isBetter: false,
      },
      {
        id: "b",
        text: "Raise your hand and ask: “Could you explain that part once more?”",
        feedback:
          "Simple and respectful. Most teachers appreciate genuine questions. It also shows engagement.",
        isBetter: true,
      },
      {
        id: "c",
        text: "Ask a classmate privately after class only.",
        feedback:
          "This can work, but practising asking in the larger group builds more confidence over time.",
        isBetter: false,
      },
    ],
    reflectionPrompt:
      "What stops you most from asking questions in a group setting?",
  },
  {
    id: "conf-presentation",
    title: "Delivering a Short Presentation",
    situation:
      "You have to give a 2-minute presentation. Your hands feel shaky and your mind is racing.",
    options: [
      {
        id: "a",
        text: "Read everything from the slides without looking up.",
        feedback:
          "This reduces anxiety short-term but makes the presentation less engaging and doesn’t build speaking confidence.",
        isBetter: false,
      },
      {
        id: "b",
        text: "Take a slow breath, look at the audience briefly, and start with a simple opening sentence.",
        feedback:
          "Good. A calm start and one clear sentence help your nervous system settle. Perfect delivery is not required.",
        isBetter: true,
      },
      {
        id: "c",
        text: "Apologise multiple times for being nervous.",
        feedback:
          "Apologising draws more attention to nervousness. It’s better to simply begin and focus on the content.",
        isBetter: false,
      },
    ],
    reflectionPrompt:
      "What is one preparation step that helps you feel slightly calmer before speaking?",
  },
  {
    id: "conf-feedback",
    title: "Receiving Feedback",
    situation:
      "A teacher or teammate gives you critical feedback on your work. You feel a bit defensive.",
    options: [
      {
        id: "a",
        text: "Immediately explain why you did it that way.",
        feedback:
          "Defending too quickly can close the conversation. Listening first usually leads to better understanding.",
        isBetter: false,
      },
      {
        id: "b",
        text: "Listen fully, then say “Thank you. Let me think about that.”",
        feedback:
          "Strong response. It shows maturity and gives you time to process without reacting emotionally.",
        isBetter: true,
      },
      {
        id: "c",
        text: "Stay silent and feel discouraged.",
        feedback:
          "Feedback is information, not a judgment of your worth. Learning to separate the two builds real confidence.",
        isBetter: false,
      },
    ],
    reflectionPrompt:
      "How can you remind yourself that feedback is about the work, not about you as a person?",
  },
  {
    id: "conf-disagreement",
    title: "Handling Disagreement Respectfully",
    situation:
      "In a team discussion, someone strongly disagrees with your idea. You feel your point is being dismissed.",
    options: [
      {
        id: "a",
        text: "Raise your voice and insist you are right.",
        feedback:
          "This often escalates tension. Confidence is not about winning every point — it’s about expressing yourself calmly.",
        isBetter: false,
      },
      {
        id: "b",
        text: "Say “I see your point. Here’s the reason I suggested this…” and explain briefly.",
        feedback:
          "Balanced approach. You acknowledge the other person and still stand by your thinking without aggression.",
        isBetter: true,
      },
      {
        id: "c",
        text: "Withdraw completely and stop contributing.",
        feedback:
          "Withdrawing protects you from conflict but also reduces your influence. Practising calm disagreement is a useful skill.",
        isBetter: false,
      },
    ],
    reflectionPrompt:
      "What phrase can help you disagree without sounding confrontational?",
  },
];
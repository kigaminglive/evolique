export default function HowItWorksPage() {
  const steps = [
    {
      number: "1",
      title: "Assess your current skills",
      description: "Take a short self-reflection assessment to understand where you stand.",
    },
    {
      number: "2",
      title: "Choose a development goal",
      description: "Pick what you want to improve — communication, confidence, habits, or career.",
    },
    {
      number: "3",
      title: "Learn through short lessons",
      description: "Go through practical, easy-to-understand lessons designed for real life.",
    },
    {
      number: "4",
      title: "Practice with interactive exercises",
      description: "Apply what you learn through guided exercises and scenarios.",
    },
    {
      number: "5",
      title: "Complete challenges and build habits",
      description: "Stay consistent with daily and weekly challenges that build real skills.",
    },
    {
      number: "6",
      title: "Review progress and adjust",
      description: "Track your growth and refine your plan based on actual progress.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-4">How It Works</h1>
      <p className="text-foreground-secondary text-lg mb-12">
        Evolique follows a simple, practical process to help you grow consistently.
      </p>

      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
              {step.number}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {step.title}
              </h3>
              <p className="text-foreground-secondary">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
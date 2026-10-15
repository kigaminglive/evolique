const faqs = [
  {
    question: "Is Evolique free to use?",
    answer:
      "Yes. The current version is completely free and runs on your local computer. No paid services are required.",
  },
  {
    question: "Do I need an account?",
    answer:
      "For the local development version, we use a simple development-mode user flow. Real authentication will be added later if needed.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Currently all data is stored locally in your browser (LocalStorage). It stays on your device and is not sent to any server.",
  },
  {
    question: "Can I delete my data?",
    answer:
      "Yes. You will have clear options to reset or delete all locally stored data from the settings page.",
  },
  {
    question: "Is this a psychological assessment?",
    answer:
      "No. The assessment is a self-reflection tool only. It does not diagnose any medical or psychological condition.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-foreground-secondary text-lg mb-10">
        Common questions about Evolique.
      </p>

      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="border-b border-border pb-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {faq.question}
            </h3>
            <p className="text-foreground-secondary">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function AccessibilityPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Accessibility Statement
      </h1>
      <p className="text-sm text-foreground-secondary mb-8">Draft</p>

      <div className="space-y-5 text-foreground-secondary leading-relaxed">
        <p>
          Evolique aims to be usable by as many people as possible. The current
          version uses semantic HTML, visible focus states, and keyboard-accessible
          controls where implemented.
        </p>
        <p>
          We are continuing to improve colour contrast, form labels, and
          screen-reader support. If you face accessibility barriers, please use
          the Contact page to share feedback.
        </p>
        <p>
          This statement will be updated as accessibility improvements are made.
        </p>
      </div>
    </div>
  );
}
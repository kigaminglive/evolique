export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Educational Disclaimer
      </h1>
      <p className="text-sm text-foreground-secondary mb-8">Draft</p>

      <div className="space-y-5 text-foreground-secondary leading-relaxed">
        <p>
          Evolique is an educational personal development platform. It provides
          structured lessons, self-reflection tools, practice exercises, and
          progress tracking.
        </p>
        <p>
          The assessment results are self-reflection estimates only. They are
          not psychological evaluations, medical diagnoses, or clinical advice.
        </p>
        <p>
          Journaling and emotional intelligence features are for personal
          reflection. They are not a substitute for therapy or professional
          mental health support.
        </p>
        <p>
          Career and communication guidance is general educational content.
          Outcomes depend on individual effort and real-world practice.
        </p>
      </div>
    </div>
  );
}
export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-foreground-secondary mb-8">
        Draft · Last updated: October 2026
      </p>

      <div className="space-y-6 text-foreground-secondary leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            1. Nature of the service
          </h2>
          <p>
            Evolique is an educational personal development tool. It is not a
            medical, psychological, or clinical service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            2. Assessments
          </h2>
          <p>
            Assessment results are self-reflection estimates only. They are not
            diagnoses and should not be treated as professional evaluations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            3. Local development version
          </h2>
          <p>
            The current version runs locally on your device. Authentication is a
            development-mode flow and is not production-grade security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            4. User responsibility
          </h2>
          <p>
            You are responsible for the accuracy of information you enter and for
            how you use the practice exercises and recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            5. No guarantees
          </h2>
          <p>
            Evolique does not guarantee specific personal or career outcomes.
            Progress depends on consistent practice and real-world application.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            6. Draft status
          </h2>
          <p>
            These terms are a draft for the local prototype. They should be
            reviewed and updated before any public or commercial launch.
          </p>
        </section>
      </div>
    </div>
  );
}
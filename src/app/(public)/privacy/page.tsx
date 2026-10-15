export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="text-sm text-foreground-secondary mb-8">
        Draft · Last updated: October 2026
      </p>

      <div className="space-y-6 text-foreground-secondary leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            1. Introduction
          </h2>
          <p>
            Evolique is currently a local development application. This draft
            explains how data is handled in the present version.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            2. What data is stored
          </h2>
          <p>
            In the current version, data such as assessment answers, goals,
            habits, journal entries, challenge completions, and practice
            responses is stored only in your browser (LocalStorage) on this
            device.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            3. What is not collected
          </h2>
          <p>
            No data is sent to external servers in this local version. There is
            no cloud database, no analytics service, and no third-party tracking
            implemented.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            4. Journal privacy
          </h2>
          <p>
            Journal entries are treated as private personal data and remain on
            your device. They are not included in shared analytics.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            5. Deleting your data
          </h2>
          <p>
            You can delete all local data from Settings → Your Data. This action
            is permanent for the current browser/device.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            6. Future changes
          </h2>
          <p>
            If Evolique is later moved to a hosted backend, this policy will be
            updated to explain server-side storage, authentication, and any
            applicable legal requirements. This document is a draft and should be
            reviewed before any public launch.
          </p>
        </section>
      </div>
    </div>
  );
}
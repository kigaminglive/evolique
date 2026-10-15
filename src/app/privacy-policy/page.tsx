import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Evolique",
  description:
    "Learn how Evolique collects, uses, and protects information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#202033]">
      <section className="border-b border-[#E8E5F0] bg-[#F8F7FC]">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/"
            className="text-sm font-medium text-[#7557D9] hover:underline"
          >
            ← Back to Evolique
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#7557D9]">
            Legal
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#666579]">
            Your privacy matters to us. This Privacy Policy explains how
            Evolique handles information when you use our platform.
          </p>

          <p className="mt-4 text-sm text-[#666579]">
            Last updated: October 15, 2026
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-14">
        <div className="space-y-10 leading-8 text-[#666579]">
          <section>
            <h2 className="text-2xl font-bold text-[#202033]">
              1. Introduction
            </h2>

            <p className="mt-4">
              Evolique is a personal development platform designed to help
              users improve areas such as communication, confidence, habits,
              emotional intelligence, career readiness, and other personal
              development skills.
            </p>

            <p className="mt-4">
              This Privacy Policy explains what information may be collected,
              how that information may be used, and the choices available to
              users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#202033]">
              2. Information We Collect
            </h2>

            <p className="mt-4">
              Depending on the features you use, Evolique may process
              information such as:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Name and basic profile information.</li>
              <li>Email address when an account requires it.</li>
              <li>Assessment answers and assessment results.</li>
              <li>Personal development goals and preferences.</li>
              <li>Learning progress and completed activities.</li>
              <li>Habit and challenge progress.</li>
              <li>Information submitted through contact or feedback forms.</li>
              <li>Technical information required to operate the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#202033]">
              3. How We Use Information
            </h2>

            <p className="mt-4">
              Information may be used to provide, personalize, maintain, and
              improve Evolique and its features.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Provide your Evolique account and profile.</li>
              <li>Save your development progress.</li>
              <li>Process assessments and display results.</li>
              <li>Provide personalized development recommendations.</li>
              <li>Track challenges, habits, and achievements.</li>
              <li>Improve platform performance and reliability.</li>
              <li>Protect the platform against misuse and security threats.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#202033]">
              4. Supabase and Data Storage
            </h2>

            <p className="mt-4">
              Evolique may use Supabase for database, authentication, and
              related backend services. Information stored through these
              services is processed according to the application's
              configuration and applicable provider policies.
            </p>

            <p className="mt-4">
              Production data handling, retention, security rules, and access
              permissions should be configured carefully before the application
              is publicly launched.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#202033]">
              5. Cookies and Local Storage
            </h2>

            <p className="mt-4">
              Evolique may use browser technologies such as cookies or
              LocalStorage to remember preferences, maintain functionality,
              or improve the user experience.
            </p>

            <p className="mt-4">
              The exact technologies used depend on the features enabled in
              the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#202033]">
              6. Third-Party Services
            </h2>

            <p className="mt-4">
              Evolique may use third-party services for hosting, database
              infrastructure, authentication, analytics, email delivery,
              security, or other functionality.
            </p>

            <p className="mt-4">
              These services may process information as necessary to provide
              their respective services. The final production policy should
              identify the services actually used by Evolique.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#202033]">
              7. Data Security
            </h2>

            <p className="mt-4">
              We aim to use appropriate technical and organizational measures
              to protect information handled by Evolique. However, no method of
              electronic storage or transmission can be guaranteed to be
              completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#202033]">
              8. Your Data Choices
            </h2>

            <p className="mt-4">
              Depending on the features available, users may be able to update
              their profile information, modify preferences, delete certain
              records, or request account and data deletion.
            </p>

            <p className="mt-4">
              Available controls depend on the production implementation of
              Evolique.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#202033]">
              9. Children's Privacy
            </h2>

            <p className="mt-4">
              Evolique should not knowingly collect personal information from
              children in circumstances where applicable law requires parental
              consent or additional safeguards without implementing the
              appropriate requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#202033]">
              10. Changes to This Privacy Policy
            </h2>

            <p className="mt-4">
              We may update this Privacy Policy when Evolique's features,
              technology, or legal requirements change. The latest version will
              include an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#202033]">
              11. Contact
            </h2>

            <p className="mt-4">
              If you have questions about this Privacy Policy or the handling
              of your information, please contact Evolique through the official
              contact method provided on the platform.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E8E5F0] bg-[#F8F7FC] p-6">
            <h2 className="text-xl font-bold text-[#202033]">
              Important Notice
            </h2>

            <p className="mt-3">
              This page is a general product-policy draft and should be
              reviewed against your actual data collection, Supabase
              configuration, authentication system, analytics tools, and
              applicable laws before public launch.
            </p>
          </section>
        </div>

        <div className="mt-12 flex gap-6 border-t border-[#E8E5F0] pt-6">
          <Link
            href="/terms"
            className="font-semibold text-[#7557D9] hover:underline"
          >
            Terms of Service →
          </Link>

          <Link
            href="/"
            className="font-semibold text-[#666579] hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </article>
    </main>
  );
}
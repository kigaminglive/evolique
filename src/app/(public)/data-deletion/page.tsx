import Link from "next/link";

export default function DataDeletionPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Account & Data Deletion
      </h1>
      <p className="text-sm text-foreground-secondary mb-8">Draft</p>

      <div className="space-y-5 text-foreground-secondary leading-relaxed">
        <p>
          In the current local version, all data is stored in your browser
          (LocalStorage) on this device only.
        </p>
        <p>
          To delete all your Evolique data:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Sign in to your development account</li>
          <li>Go to <strong>Settings</strong></li>
          <li>Open <strong>Your Data</strong></li>
          <li>Confirm <strong>Delete All Local Data</strong></li>
        </ol>
        <p>
          This permanently removes assessments, goals, habits, journal entries,
          challenges, and practice history from this browser.
        </p>
        <p>
          You can also clear site data from your browser settings.
        </p>
        <p>
          <Link href="/settings" className="text-primary hover:underline">
            Go to Settings →
          </Link>
        </p>
      </div>
    </div>
  );
}
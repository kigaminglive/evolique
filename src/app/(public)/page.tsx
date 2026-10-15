import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Evolique
        </h1>
        <p className="text-xl text-foreground-secondary mb-8 max-w-2xl mx-auto">
          Your Journey to a Better You.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Your Journey</Button>
          </Link>
          <Link href="/features">
            <Button variant="outline" size="lg">
              Explore Features
            </Button>
          </Link>
        </div>
      </section>

      {/* Feature Preview Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Personal Assessment
            </h3>
            <p className="text-foreground-secondary text-sm">
              Understand your current skills and get personalized recommendations.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Daily Challenges
            </h3>
            <p className="text-foreground-secondary text-sm">
              Build confidence and habits through small, consistent practice.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Career Readiness
            </h3>
            <p className="text-foreground-secondary text-sm">
              Prepare for interviews, communication, and professional growth.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Link from "next/link";
import {
  MessageCircle,
  User,
  Headphones,
  Users,
  Calendar,
  Heart,
  Briefcase,
  Target,
  Clock,
  Shield,
  Star,
  BarChart3,
} from "lucide-react";

const categories = [
  {
    title: "Communication",
    description: "Express your thoughts clearly and confidently.",
    questions: 5,
    icon: MessageCircle,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Confidence",
    description: "Handle different situations with self-assurance.",
    questions: 5,
    icon: User,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Listening",
    description: "Understand and value other perspectives.",
    questions: 4,
    icon: Headphones,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Teamwork",
    description: "Work effectively with others.",
    questions: 4,
    icon: Users,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Habits & Consistency",
    description: "Build routines and stay disciplined.",
    questions: 4,
    icon: Calendar,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Emotional Awareness",
    description: "Recognise and manage your emotions.",
    questions: 4,
    icon: Heart,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Professional Readiness",
    description: "Prepare for college, interviews and career.",
    questions: 4,
    icon: Briefcase,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Goal Setting",
    description: "Plan and work towards your goals.",
    questions: 4,
    icon: Target,
    color: "bg-rose-100 text-rose-600",
  },
];

export default function AssessmentPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-foreground-secondary mb-4">
        Dashboard &gt; Assessment
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Personal Development Assessment
        </h1>
        <p className="text-foreground-secondary max-w-2xl">
          Take a few minutes to reflect on your current skills and identify areas
          where you want to grow. This assessment will help you get personalised
          recommendations for your learning journey.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-background border border-border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Clock size={18} className="text-primary" />
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">15–20 minutes</div>
            <div className="text-xs text-foreground-secondary">Estimated time</div>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <BarChart3 size={18} className="text-primary" />
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">8 key areas</div>
            <div className="text-xs text-foreground-secondary">Skills & behaviours</div>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield size={18} className="text-primary" />
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">Self-reflection</div>
            <div className="text-xs text-foreground-secondary">Not a clinical diagnosis</div>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Star size={18} className="text-primary" />
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">Personalised</div>
            <div className="text-xs text-foreground-secondary">Recommendations</div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <h2 className="text-xl font-semibold text-foreground mb-2">
        Assessment Categories
      </h2>
      <p className="text-foreground-secondary mb-6">
        The assessment covers multiple areas of personal and professional development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Card key={cat.title} className="hover:shadow-md transition-shadow">
              <div
                className={`w-10 h-10 rounded-full ${cat.color} flex items-center justify-center mb-3`}
              >
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{cat.title}</h3>
              <p className="text-sm text-foreground-secondary mb-3">
                {cat.description}
              </p>
              <div className="text-xs text-foreground-secondary">
                {cat.questions} questions
              </div>
            </Card>
          );
        })}
      </div>

      {/* Ready to start */}
      <Card className="bg-primary/5 border-primary/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ready to start?
            </h3>
            <p className="text-foreground-secondary">
              Answer a few questions honestly. There are no right or wrong answers —
              just your current perspective.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/assessment/take">
              <Button size="lg">Start Assessment →</Button>
            </Link>
            <Link href="/assessment/results">
              <Button variant="outline" size="lg">
                View Previous Results
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Disclaimer */}
      <div className="mt-6 text-sm text-foreground-secondary bg-background border border-border rounded-lg p-4">
        <strong>Important:</strong> This assessment is a self-reflection tool to help
        you understand your current skills and areas for growth. It is not a
        psychological evaluation or a clinical diagnosis. Your results are meant for
        personal development guidance only.
      </div>
    </div>
  );
}
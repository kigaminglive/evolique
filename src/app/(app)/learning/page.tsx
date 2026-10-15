import Link from "next/link";
import Card from "@/components/ui/card";
import {
  MessageCircle,
  Heart,
  Brain,
  Activity,
  Briefcase,
  Route,
} from "lucide-react";

const areas = [
  {
    title: "Communication Lab",
    description: "Self-introduction, conversations, listening, public speaking.",
    href: "/communication",
    icon: MessageCircle,
  },
  {
    title: "Confidence Builder",
    description: "Practice real situations with guided feedback.",
    href: "/confidence",
    icon: Heart,
  },
  {
    title: "Emotional Intelligence",
    description: "Journaling and self-awareness exercises.",
    href: "/emotional-intelligence",
    icon: Brain,
  },
  {
    title: "Body Language",
    description: "Posture, gestures, greetings, and meeting behaviour.",
    href: "/body-language",
    icon: Activity,
  },
  {
    title: "Career Development",
    description: "Resume, interviews, STAR method, professional intro.",
    href: "/career",
    icon: Briefcase,
  },
  {
    title: "Learning Paths",
    description: "Structured paths across all growth areas.",
    href: "/learning-paths",
    icon: Route,
  },
];

export default function LearningCentrePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Learning Centre
        </h1>
        <p className="text-foreground-secondary">
          All your practice areas in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {areas.map((area) => {
          const Icon = area.icon;
          return (
            <Link key={area.title} href={area.href}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {area.title}
                </h3>
                <p className="text-sm text-foreground-secondary">
                  {area.description}
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
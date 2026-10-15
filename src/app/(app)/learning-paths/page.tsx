"use client";

import Link from "next/link";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import {
  MessageCircle,
  Heart,
  Brain,
  Calendar,
  Users,
  Briefcase,
} from "lucide-react";

const paths = [
  {
    id: "communication",
    title: "Communication Mastery",
    description:
      "Improve speaking, listening, everyday conversation, and public speaking.",
    icon: MessageCircle,
    href: "/communication",
    lessons: "6 lessons",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "confidence",
    title: "Confidence Building",
    description:
      "Practice real social and professional situations with guided scenarios.",
    icon: Heart,
    href: "/confidence",
    lessons: "6 scenarios",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "emotional",
    title: "Emotional Intelligence",
    description:
      "Build self-awareness through reflection and emotion journaling.",
    icon: Brain,
    href: "/emotional-intelligence",
    lessons: "Journal + reflection",
    color: "bg-violet-100 text-violet-600",
  },
  {
    id: "habits",
    title: "Discipline & Habit Building",
    description:
      "Create daily habits and track consistency over time.",
    icon: Calendar,
    href: "/habits",
    lessons: "Habit tracker",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "teamwork",
    title: "Leadership & Teamwork",
    description:
      "Learn collaboration, feedback, and working effectively with others.",
    icon: Users,
    href: "/confidence",
    lessons: "Scenarios included",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "career",
    title: "Career Readiness",
    description:
      "Resume, LinkedIn, interviews, STAR method, and professional presence.",
    icon: Briefcase,
    href: "/career",
    lessons: "6 resources",
    color: "bg-sky-100 text-sky-600",
  },
];

export default function LearningPathsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Learning Paths
        </h1>
        <p className="text-foreground-secondary">
          Structured paths to help you grow in the areas that matter most.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {paths.map((path) => {
          const Icon = path.icon;
          return (
            <Card key={path.id} className="flex flex-col">
              <div
                className={`w-11 h-11 rounded-full ${path.color} flex items-center justify-center mb-4`}
              >
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {path.title}
              </h3>
              <p className="text-sm text-foreground-secondary mb-3 flex-1">
                {path.description}
              </p>
              <div className="text-xs text-foreground-secondary mb-4">
                {path.lessons}
              </div>
              <Link href={path.href}>
                <Button variant="outline" className="w-full">
                  Open Path
                </Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
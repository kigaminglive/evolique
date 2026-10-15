"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  ClipboardList,
  BookOpen,
  MessageCircle,
  Heart,
  Brain,
  Target,
  Calendar,
  Activity,
  Briefcase,
  BarChart3,
  Route,
  Goal,
  User,
  Settings,
  Lightbulb,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Assessment", href: "/assessment", icon: ClipboardList },
  { name: "Growth Coach", href: "/coach", icon: Lightbulb },
  { name: "Learning Centre", href: "/learning", icon: BookOpen },
  { name: "Communication Lab", href: "/communication", icon: MessageCircle },
  { name: "Confidence Builder", href: "/confidence", icon: Heart },
  { name: "Emotional Intelligence", href: "/emotional-intelligence", icon: Brain },
  { name: "Daily Challenges", href: "/challenges", icon: Target },
  { name: "Habit Tracker", href: "/habits", icon: Calendar },
  { name: "Body Language", href: "/body-language", icon: Activity },
  { name: "Career Development", href: "/career", icon: Briefcase },
  { name: "Progress Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Learning Paths", href: "/learning-paths", icon: Route },
  { name: "Goals", href: "/goals", icon: Goal },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-background h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
            E
          </div>
          <div>
            <div className="font-bold text-foreground">Evolique</div>
            <div className="text-xs text-foreground-secondary">
              Your Journey to a Better You.
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground-secondary hover:bg-background-secondary hover:text-foreground"
              }`}
            >
              <Icon size={18} />
              <span className="flex-1">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom motivation card */}
      <div className="p-4">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
          <div className="text-sm font-medium text-foreground mb-1">
            Small steps
          </div>
          <div className="text-xs text-foreground-secondary mb-2">
            Big changes
          </div>
          <div className="text-xs text-primary font-medium">
            You&apos;re doing great! →
          </div>
        </div>
      </div>
    </aside>
  );
}
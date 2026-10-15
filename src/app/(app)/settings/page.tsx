"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import Card from "@/components/ui/card";
import {
  User,
  Shield,
  Bell,
  Target,
  Palette,
  Lock,
  Database,
  Download,
  HelpCircle,
  MessageCircle,
  Info,
  LogOut,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";

function SettingsRow({
  icon: Icon,
  title,
  description,
  href,
  rightElement,
  onClick,
  danger = false,
}: {
  icon: React.ElementType;
  title: string;
  description?: string;
  href?: string;
  rightElement?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
}) {
  const content = (
    <div
      className={`flex items-center gap-4 px-4 py-3.5 hover:bg-background-secondary transition-colors cursor-pointer ${
        danger ? "text-error" : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center ${
          danger ? "bg-error/10" : "bg-primary/10"
        }`}
      >
        <Icon size={18} className={danger ? "text-error" : "text-primary"} />
      </div>
      <div className="flex-1 min-w-0">
        <div className={`font-medium ${danger ? "text-error" : "text-foreground"}`}>
          {title}
        </div>
        {description && (
          <div className="text-sm text-foreground-secondary truncate">
            {description}
          </div>
        )}
      </div>
      {rightElement ? (
        rightElement
      ) : (
        <ChevronRight size={18} className="text-foreground-secondary" />
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="text-xs font-semibold text-foreground-secondary uppercase tracking-wider px-4 mb-2">
        {title}
      </div>
      <Card className="p-0 overflow-hidden divide-y divide-border">{children}</Card>
    </div>
  );
}

export default function SettingsPage() {
  const { logout } = useAuth();
  const router = useRouter();
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [message, setMessage] = useState("");

  function handleLogout() {
    logout();
    router.push("/");
  }

  function handleClearData() {
    const confirmed = confirm(
      "This will delete ALL your local data (assessments, goals, habits, journal, challenges, practice). This cannot be undone. Continue?"
    );
    if (!confirmed) return;

    const keys = [
      "evolique_user",
      "evolique_assessments",
      "evolique_goals",
      "evolique_habits",
      "evolique_habit_completions",
      "evolique_challenge_completions",
      "evolique_journal",
      "evolique_practice",
      "evolique_scenario_attempts",
      "evolique_body_language",
      "evolique_career_practice",
      "evolique_career_checklist",
    ];

    keys.forEach((key) => localStorage.removeItem(key));
    setMessage("All local data deleted. Logging out...");
    setTimeout(() => {
      logout();
      router.push("/");
    }, 1200);
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-foreground-secondary mt-1">
          Manage your Evolique experience
        </p>
      </div>

      {/* ACCOUNT */}
      <Section title="Account">
        <SettingsRow
          icon={User}
          title="Profile"
          description="Manage your personal information"
          href="/profile"
        />
        <SettingsRow
          icon={Shield}
          title="Account & Security"
          description="Password, login and account security"
          onClick={() =>
            alert(
              "Development mode: Real password/security is not implemented yet."
            )
          }
        />
        <SettingsRow
          icon={Bell}
          title="Email & Notifications"
          description="Manage your notification preferences"
          onClick={() =>
            alert("Development mode: Email notifications are not available yet.")
          }
        />
      </Section>

      {/* PERSONALIZATION */}
      <Section title="Personalization">
        <SettingsRow
          icon={Target}
          title="Goals & Interests"
          description="Choose what you want to improve"
          href="/goals"
        />
        <SettingsRow
          icon={Bell}
          title="Notifications"
          description="Daily reminders and challenges"
          rightElement={
            <button
              onClick={(e) => {
                e.preventDefault();
                setNotificationsOn(!notificationsOn);
              }}
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                notificationsOn
                  ? "bg-primary/10 text-primary"
                  : "bg-background-secondary text-foreground-secondary"
              }`}
            >
              {notificationsOn ? "ON" : "OFF"}
            </button>
          }
        />
        <SettingsRow
          icon={Palette}
          title="Appearance"
          description="Theme and display preferences"
          onClick={() =>
            alert("Development mode: Only light theme is available currently.")
          }
        />
      </Section>

      {/* PRIVACY & DATA */}
      <Section title="Privacy & Data">
        <SettingsRow
          icon={Lock}
          title="Privacy"
          description="Manage your privacy preferences"
          onClick={() =>
            alert(
              "All data is stored locally on this device only. No data is sent to any server."
            )
          }
        />
        <SettingsRow
          icon={Database}
          title="Your Data"
          description="View or manage your Evolique data"
          onClick={handleClearData}
        />
        <SettingsRow
          icon={Download}
          title="Export My Data"
          description="Download a copy of your information"
          onClick={() =>
            alert(
              "Development mode: Export feature will be added in a future version."
            )
          }
        />
      </Section>

      {/* SUPPORT */}
      <Section title="Support">
        <SettingsRow icon={HelpCircle} title="Help & FAQ" href="/faq" />
        <SettingsRow
          icon={MessageCircle}
          title="Contact Support"
          href="/contact"
        />
        <SettingsRow icon={Info} title="About Evolique" href="/about" />
      </Section>

      {/* LEGAL */}
      <Section title="Legal">
        <SettingsRow icon={Lock} title="Privacy Policy" href="/privacy" />
        <SettingsRow
          icon={Shield}
          title="Terms of Service"
          href="/terms"
        />
      </Section>

      {/* LOG OUT */}
      <Card className="p-0 overflow-hidden mb-6">
        <SettingsRow
          icon={LogOut}
          title="Log Out"
          onClick={handleLogout}
          danger
        />
      </Card>

      {message && (
        <p className="text-center text-sm text-success font-medium mb-4">
          {message}
        </p>
      )}

      <p className="text-center text-xs text-foreground-secondary pb-8">
        Evolique v1.0.0 · Local Development
      </p>
    </div>
  );
}
"use client";

import { Search, Bell, LogOut } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AppHeader() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/");
    router.refresh();
  }

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  return (
    <header className="h-14 md:h-16 border-b border-border bg-background flex items-center gap-2 px-3 md:px-6 sticky top-0 z-30">
      {/* Left spacer for mobile menu button */}
      <div className="w-10 md:hidden shrink-0" />

      {/* Search */}
      <div className="flex-1 min-w-0">
        <div className="relative max-w-md">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-secondary pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-lg bg-background-secondary focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-1 md:gap-3 shrink-0">
        <button
          className="p-2 rounded-lg hover:bg-background-secondary hidden sm:flex"
          title="Notifications"
        >
          <Bell size={18} className="text-foreground-secondary" />
        </button>

        {!isLoading && user && (
          <Link
            href="/profile"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-sm">
              {initials}
            </div>
            <span className="text-sm font-medium text-foreground hidden lg:block max-w-[100px] truncate">
              {user.name}
            </span>
          </Link>
        )}

        <button
          onClick={handleLogout}
          className="p-2 rounded-lg hover:bg-background-secondary text-foreground-secondary"
          title="Logout"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
}
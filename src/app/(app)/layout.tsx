"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import AppSidebar from "@/components/layout/app-sidebar";
import AppHeader from "@/components/layout/app-header";
import MobileNav from "@/components/layout/mobile-nav";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-foreground-secondary">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-background-secondary">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <AppSidebar />
      </div>

      {/* Mobile hamburger + drawer */}
      <MobileNav />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <AppHeader />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
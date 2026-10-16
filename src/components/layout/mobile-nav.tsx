"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import AppSidebar from "./app-sidebar";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu button — fixed in header area */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-3 left-3 z-40 w-9 h-9 flex items-center justify-center rounded-lg bg-background border border-border shadow-sm"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] transform transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-full bg-background">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-background"
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
          <AppSidebar />
        </div>
      </div>
    </>
  );
}
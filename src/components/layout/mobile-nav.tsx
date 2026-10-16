"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import AppSidebar from "./app-sidebar";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-lg bg-background border border-border shadow-sm"
        aria-label="Open menu"
      >
        <Menu size={20} />
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
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-full">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-10 p-1 rounded-lg bg-background border border-border"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
          <AppSidebar />
        </div>
      </div>
    </>
  );
}
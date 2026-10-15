"use client";

import { useState } from "react";
import Button from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For now we just show success message (no real backend)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Thank you for your feedback!
        </h1>
        <p className="text-foreground-secondary">
          Your message has been saved locally. In the current development version,
          it is not sent to any real support team.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-4">Contact & Feedback</h1>
      <p className="text-foreground-secondary mb-8">
        Share your thoughts or report an issue. Messages are stored locally during development.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Category
          </label>
          <select
            required
            className="w-full border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a category</option>
            <option value="feedback">General Feedback</option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Subject
          </label>
          <input
            type="text"
            required
            className="w-full border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Brief subject"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Message
          </label>
          <textarea
            required
            rows={5}
            className="w-full border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Write your message here..."
          />
        </div>

        <Button type="submit" size="lg" className="w-full">
          Send Feedback
        </Button>
      </form>
    </div>
  );
}
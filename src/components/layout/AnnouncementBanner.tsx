"use client";

import { ArrowRight, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative overflow-hidden bg-linear-to-r from-blue-600 via-cyan-500 to-teal-500">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-3 text-white">
        <Sparkles className="h-5 w-5" />

        <p className="text-center text-sm font-medium">
          Introducing <span className="font-bold">Medicare AI</span> — Your
          intelligent health companion.
        </p>

        <button className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-sm transition hover:bg-white/30">
          Explore
          <ArrowRight className="h-4 w-4" />
        </button>

        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 rounded-full p-1 transition hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

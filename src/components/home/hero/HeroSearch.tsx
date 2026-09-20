"use client";

import { Search, Mic } from "lucide-react";

export default function HeroSearch() {
  return (
    <form className="mt-8">
      <div className="flex h-16 items-center rounded-2xl border border-border bg-background/80 px-5 shadow-lg backdrop-blur-xl">
        <Search className="h-5 w-5 text-muted-foreground" />

        <input
          type="text"
          placeholder="Search diseases, symptoms, medicines..."
          className="flex-1 bg-transparent px-4 outline-none placeholder:text-muted-foreground"
        />

        <button
          type="button"
          className="mr-2 rounded-full p-2 transition hover:bg-muted"
        >
          <Mic className="h-5 w-5" />
        </button>

        <button
          type="submit"
          className="rounded-xl bg-primary px-5 py-2 font-medium text-primary-foreground transition hover:opacity-90"
        >
          Search
        </button>
      </div>
    </form>
  );
}

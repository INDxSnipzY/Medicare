"use client";

import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <button className="hidden h-10 items-center gap-3 rounded-full border border-border bg-background/70 px-4 backdrop-blur transition hover:bg-muted lg:flex">
      <Search className="h-4 w-4 text-muted-foreground" />

      <span className="text-sm text-muted-foreground">Search...</span>

      <kbd className="rounded-md border bg-muted px-2 py-0.5 text-xs">
        Ctrl K
      </kbd>
    </button>
  );
}

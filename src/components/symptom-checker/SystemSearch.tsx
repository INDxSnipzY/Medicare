"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Symptom } from "./types";

interface SymptomSearchProps {
  symptoms: Symptom[];
  onSelect: (symptom: Symptom) => void;
}

export default function SymptomSearch({
  symptoms,
  onSelect,
}: SymptomSearchProps) {
  const [query, setQuery] = useState("");

  const filteredSymptoms =
    query.trim().length > 0
      ? symptoms
          .filter((symptom) =>
            symptom.name
              .toLowerCase()
              .includes(query.toLowerCase())
          )
          .slice(0, 8)
      : [];

  const clearSearch = () => {
    setQuery("");
  };

  const handleSelect = (symptom: Symptom) => {
    onSelect(symptom);
    setQuery("");
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for a symptom..."
          className="h-14 rounded-2xl border-border bg-background pl-12 pr-12 text-base"
          aria-label="Search symptoms"
        />

        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {filteredSymptoms.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border bg-popover p-2 shadow-xl">
          {filteredSymptoms.map((symptom) => (
            <button
              key={symptom.id}
              type="button"
              onClick={() => handleSelect(symptom)}
              className="flex w-full items-center rounded-xl px-4 py-3 text-left transition-colors hover:bg-muted"
            >
              <div>
                <p className="font-medium">
                  {symptom.name}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {symptom.category}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {query.trim() && filteredSymptoms.length === 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border bg-popover p-5 text-center shadow-xl">
          <p className="text-sm font-medium">
            No symptoms found
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Try searching with a different term.
          </p>
        </div>
      )}
    </div>
  );
} 
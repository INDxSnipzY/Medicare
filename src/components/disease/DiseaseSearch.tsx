
"use client";

import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DiseaseSearchProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const popularSearches = [
  "Diabetes",
  "Hypertension",
  "Asthma",
  "Migraine",
  "COVID-19",
  "Dengue",
];

export default function DiseaseSearch({
  search,
  onSearchChange,
}: DiseaseSearchProps) {
  return (
    <div className="rounded-3xl border bg-background p-4 shadow-sm">
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={search}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search diseases, symptoms or treatments..."
            aria-label="Search diseases"
            className="h-12 rounded-2xl pl-12 pr-12 text-base"
          />

          {search && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => onSearchChange("")}
              className="absolute right-2 top-1/2 -translate-y-1/2"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <Button type="submit" className="h-12 px-8">
          Search
        </Button>
      </form>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">
          Popular:
        </span>

        {popularSearches.map((item) => (
          <Button
            key={item}
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onSearchChange(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}
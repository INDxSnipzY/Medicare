"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DiseaseSearch() {
  const [search, setSearch] = useState("");

  return (
    <div className="rounded-3xl border bg-background p-4 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search diseases, symptoms or treatments..."
            className="h-12 rounded-2xl pl-12 pr-12 text-base"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <Button className="h-12 px-8">
          Search
        </Button>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="text-sm font-medium text-muted-foreground">
          Popular:
        </span>

        {[
          "Diabetes",
          "Hypertension",
          "Asthma",
          "Migraine",
          "COVID-19",
          "Dengue",
        ].map((item) => (
          <Button
            key={item}
            variant="outline"
            size="sm"
            onClick={() => setSearch(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}
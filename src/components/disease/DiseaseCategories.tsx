
"use client";

import {
  Activity,
  Brain,
  Heart,
  ShieldPlus,
  Stethoscope,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "All", icon: Stethoscope },
  { name: "Cardiology", icon: Heart },
  { name: "Neurology", icon: Brain },
  { name: "Endocrine", icon: Activity },
  { name: "Infectious", icon: ShieldPlus },
];

interface DiseaseCategoriesProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function DiseaseCategories({
  selected,
  onSelect,
}: DiseaseCategoriesProps) {
  return (
    <section className="py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <Badge className="mb-3">Categories</Badge>

          <h2 className="text-3xl font-bold">
            Browse by Medical Specialty
          </h2>

          <p className="mt-2 text-muted-foreground">
            Explore diseases by medical specialty or body system.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map(({ name, icon: Icon }) => {
            const active = selected === name;

            return (
              <Button
                key={name}
                type="button"
                variant={active ? "default" : "outline"}
                aria-pressed={active}
                onClick={() => onSelect(name)}
                className="h-auto justify-start rounded-2xl p-5"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-xl p-2 ${
                      active ? "bg-white/20" : "bg-primary/10"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="font-semibold">{name}</span>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
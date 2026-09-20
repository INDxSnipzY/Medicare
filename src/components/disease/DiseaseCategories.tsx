"use client";

import { useState } from "react";

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
  {
    name: "All",
    icon: Stethoscope,
  },
  {
    name: "Cardiology",
    icon: Heart,
  },
  {
    name: "Neurology",
    icon: Brain,
  },
  {
    name: "Endocrine",
    icon: Activity,
  },
  {
    name: "Infectious",
    icon: ShieldPlus,
  },
];

export default function DiseaseCategories() {
  const [selected, setSelected] = useState("All");

  return (
    <section className="py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col gap-2">
          <Badge className="w-fit">
            Categories
          </Badge>

          <h2 className="text-3xl font-bold">
            Browse by Medical Specialty
          </h2>

          <p className="text-muted-foreground">
            Quickly explore diseases based on their medical specialty or body
            system.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {categories.map((category) => {
            const Icon = category.icon;

            const active = selected === category.name;

            return (
              <Button
                key={category.name}
                variant={active ? "default" : "outline"}
                className="h-auto justify-start rounded-2xl p-5"
                onClick={() => setSelected(category.name)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-xl p-2 ${
                      active
                        ? "bg-white/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="text-left">
                    <div className="font-semibold">
                      {category.name}
                    </div>

                    <div className="text-xs opacity-70">
                      Specialty
                    </div>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
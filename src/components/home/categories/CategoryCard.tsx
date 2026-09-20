import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Category } from "./types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <Link
      href={category.href}
      className="group rounded-3xl border border-border/50 bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mt-6 text-xl font-semibold">{category.title}</h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {category.description}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm font-medium text-primary">
          {category.diseases.toLocaleString()} Topics
        </span>

        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}

"use client";

import Link from "next/link";
import { ChevronRight, House } from "lucide-react";

import { Disease } from "@/types/disease";

interface BreadcrumbProps {
  disease: Disease;
}

export default function Breadcrumb({ disease }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 py-6 text-sm text-muted-foreground"
    >
      <Link
        href="/"
        className="flex items-center gap-1 transition hover:text-primary"
      >
        <House className="h-4 w-4" />
        Home
      </Link>

      <ChevronRight className="h-4 w-4" />

      <Link href="/diseases" className="transition hover:text-primary">
        Diseases
      </Link>

      <ChevronRight className="h-4 w-4" />

      <span className="font-medium text-foreground">{disease.name}</span>
    </nav>
  );
}

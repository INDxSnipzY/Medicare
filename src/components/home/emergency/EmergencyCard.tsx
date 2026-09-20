import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { EmergencyItem } from "./types";

interface EmergencyCardProps {
  item: EmergencyItem;
}

export default function EmergencyCard({ item }: EmergencyCardProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="group rounded-3xl border border-red-500/20 bg-red-500/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {item.description}
      </p>

      <div className="mt-8 flex items-center gap-2 font-medium text-red-500">
        Learn More
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

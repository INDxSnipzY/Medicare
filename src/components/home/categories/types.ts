import { LucideIcon } from "lucide-react";

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  diseases: number;
  href: string;
}

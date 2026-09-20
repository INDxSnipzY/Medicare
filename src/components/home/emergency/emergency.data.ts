import {
  Ambulance,
  HeartPulse,
  Flame,
  Droplets,
  Zap,
  Brain,
} from "lucide-react";

import { EmergencyItem } from "./types";

export const emergencyItems: EmergencyItem[] = [
  {
    id: "ambulance",
    title: "Emergency Numbers",
    description: "Quick access to emergency contacts in India.",
    icon: Ambulance,
    href: "/emergency/numbers",
  },
  {
    id: "cpr",
    title: "CPR Guide",
    description: "Step-by-step CPR instructions for adults.",
    icon: HeartPulse,
    href: "/emergency/cpr",
  },
  {
    id: "burn",
    title: "Burn Treatment",
    description: "Immediate first aid for burns.",
    icon: Flame,
    href: "/emergency/burns",
  },
  {
    id: "bleeding",
    title: "Bleeding Control",
    description: "Manage severe bleeding safely.",
    icon: Droplets,
    href: "/emergency/bleeding",
  },
  {
    id: "electric",
    title: "Electric Shock",
    description: "Respond safely to electrical injuries.",
    icon: Zap,
    href: "/emergency/electric-shock",
  },
  {
    id: "stroke",
    title: "Stroke Warning",
    description: "Recognize stroke symptoms quickly.",
    icon: Brain,
    href: "/emergency/stroke",
  },
];

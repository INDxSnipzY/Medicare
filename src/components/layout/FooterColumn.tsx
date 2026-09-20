import Link from "next/link";
import { FooterSection } from "./types";

interface FooterColumnProps {
  section: FooterSection;
}

export default function FooterColumn({ section }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold">{section.title}</h3>

      <ul className="space-y-3">
        {section.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted-foreground transition hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

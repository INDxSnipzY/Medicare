import Link from "next/link";
import { HeartPulse } from "lucide-react";

import Container from "@/components/common/Container";

import FooterColumn from "./FooterColumn";
import { footerSections } from "./footer.data";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-row items-center justify-between gap-3">
            {footerSections.map((section) => (
              <FooterColumn key={section.title} section={section} />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Medicare. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

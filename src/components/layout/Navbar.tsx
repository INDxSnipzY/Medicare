"use client";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import SearchButton from "./SearchButton";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full fixed bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-3">
          <SearchButton />

          <ThemeToggle />

          <button className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 lg:block">
            Find a Doctor
          </button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

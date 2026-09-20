import { BackgroundEffects } from "@/components/background";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <BackgroundEffects />

      {children}
    </div>
  );
}

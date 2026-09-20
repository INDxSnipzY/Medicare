import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;

  className?: string;
}

export default function GlassCard({
  children,

  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-3xl",

        "border",

        "border-white/30",

        "bg-white/60",

        "backdrop-blur-xl",

        "shadow-xl",

        className,
      )}
    >
      {children}
    </div>
  );
}

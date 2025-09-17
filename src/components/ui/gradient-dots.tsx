import { cn } from "@/lib/utils";

interface GradientDotsProps {
  className?: string;
  duration?: number;
}

export function GradientDots({ className, duration = 20 }: GradientDotsProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden opacity-50 animate-pulse",
        className
      )}
      style={{
        background: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
        backgroundPosition: "0 0, 25px 25px",
      }}
    />
  );
}
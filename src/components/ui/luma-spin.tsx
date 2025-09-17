import { cn } from "@/lib/utils";

interface LumaSpinProps {
  className?: string;
  size?: number;
}

export function LumaSpin({ className, size = 40 }: LumaSpinProps) {
  return (
    <div
      className={cn(
        "relative inline-block animate-spin",
        className
      )}
      style={{ width: size, height: size }}
    >
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-75"
        style={{
          background: `conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)), hsl(var(--primary)))`,
        }}
      />
      <div 
        className="absolute inset-1 rounded-full bg-background"
      />
    </div>
  );
}
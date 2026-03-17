import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 8,
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
      style={{
        overflow: "hidden",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "1px",
        borderRadius: "inherit",
      }}
    >
      <div
        className="absolute inset-0 animate-border-beam"
        style={
          {
            "--size": `${size}px`,
            "--duration": `${duration}s`,
            "--delay": `${delay}s`,
            background: `conic-gradient(from calc(var(--angle) - 60deg), transparent 0%, transparent 70%, hsl(var(--primary)) 85%, hsl(var(--primary) / 0.6) 95%, transparent 100%)`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

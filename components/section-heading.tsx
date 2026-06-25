import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {subtitle}
        </span>
        {align === "center" && <span className="h-px w-8 bg-gold" />}
      </div>
      <h2 className="text-3xl font-medium tracking-[-0.01em] text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
    </div>
  );
}

import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  className,
}: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        "relative rounded-2xl bg-white p-8 shadow-sm",
        className
      )}
    >
      <span className="absolute left-6 top-4 text-6xl leading-none text-gold/20">
        &ldquo;
      </span>
      <p className="relative z-10 pt-6 text-base leading-relaxed text-slate-700">
        {quote}
      </p>
      <footer className="mt-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <cite className="not-italic text-sm font-semibold text-navy">
            {name}
          </cite>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </footer>
    </blockquote>
  );
}

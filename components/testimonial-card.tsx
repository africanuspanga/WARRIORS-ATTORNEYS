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
        "relative rounded-2xl border border-white/10 bg-navy-800/60 p-8 transition-colors hover:bg-navy-800/80",
        className
      )}
    >
      <span className="font-heading absolute left-6 top-3 text-7xl leading-none text-gold/30">
        &ldquo;
      </span>
      <p className="font-display-italic relative z-10 pt-7 text-lg leading-relaxed text-slate-100">
        {quote}
      </p>
      <footer className="mt-7 flex items-center gap-4 border-t border-white/10 pt-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-sm font-semibold text-gold">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <cite className="text-sm font-semibold not-italic text-white">
            {name}
          </cite>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </footer>
    </blockquote>
  );
}

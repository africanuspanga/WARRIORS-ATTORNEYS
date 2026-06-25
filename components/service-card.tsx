import Image from "next/image";
import { Service } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
  expanded?: boolean;
}

export function ServiceCard({
  service,
  className,
  expanded = false,
}: ServiceCardProps) {
  return (
    <article
      id={service.id}
      className={cn(
        "group overflow-hidden rounded-2xl border border-ivory-200 bg-white shadow-[0_1px_2px_rgba(11,34,78,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_24px_50px_-20px_rgba(11,34,78,0.22)]",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">
          {service.number}
        </span>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-xs font-medium uppercase tracking-wider text-gold-100">
            {service.category}
          </span>
          <h3 className="mt-1 text-xl font-medium tracking-tight text-white">
            {service.title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm leading-relaxed text-slate-600">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2">
          {(expanded ? service.items : service.items.slice(0, 6)).map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-slate-700"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
          {!expanded && service.items.length > 6 && (
            <li className="text-xs font-medium text-sky">
              +{service.items.length - 6} more services
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}

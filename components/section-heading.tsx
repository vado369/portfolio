import { cn } from "@/lib/utils"

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  className,
}: {
  kicker: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      <span className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-wider text-primary uppercase">
        <span className="h-px w-6 bg-primary" />
        {kicker}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

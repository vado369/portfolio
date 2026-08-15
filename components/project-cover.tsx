import type { Project } from "@/lib/content"
import { cn } from "@/lib/utils"

export function ProjectCover({ project, className }: { project: Project; className?: string }) {
  const initials = project.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-card to-card",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 size-32 rounded-full bg-primary/15 blur-2xl" />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className="grid size-14 place-items-center rounded-xl border border-primary/25 bg-primary/10 font-mono text-xl font-bold text-primary">
          {initials}
        </span>
        <span className="font-mono text-sm font-medium tracking-tight text-foreground/70">{project.name}</span>
      </div>
    </div>
  )
}

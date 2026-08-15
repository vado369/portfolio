import { useLanguage } from "@/components/language-provider"
import type { ProjectStatus } from "@/lib/content"
import { cn } from "@/lib/utils"

export function StatusPill({ status, className }: { status: ProjectStatus; className?: string }) {
  const { t } = useLanguage()
  const isLive = status === "live"
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs font-medium",
        isLive
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          : "border-border bg-secondary/60 text-muted-foreground",
        className,
      )}
    >
      <span
        className={cn("size-1.5 rounded-full", isLive ? "bg-emerald-500" : "bg-muted-foreground")}
      />
      {isLive ? t.projects.live : t.projects.archived}
    </span>
  )
}

"use client"

import { ArrowUpRight, Plus } from "lucide-react"
import { useMemo, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { ProjectCover } from "@/components/project-cover"
import { ProjectModal } from "@/components/project-modal"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { StatusPill } from "@/components/status-pill"
import { TechBadge } from "@/components/tech-badge"
import { type Project, projects } from "@/lib/content"
import { cn } from "@/lib/utils"

type Filter = "all" | "live" | "archived"

export function Projects() {
  const { lang, t } = useLanguage()
  const [filter, setFilter] = useState<Filter>("all")
  const [active, setActive] = useState<Project | null>(null)
  const [open, setOpen] = useState(false)

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.status === filter)),
    [filter],
  )

  const openProject = (project: Project) => {
    setActive(project)
    setOpen(true)
  }

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: t.projects.all },
    { id: "live", label: t.projects.live },
    { id: "archived", label: t.projects.archived },
  ]

  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading kicker={t.projects.kicker} title={t.projects.title} subtitle={t.projects.subtitle} />
          <div className="inline-flex shrink-0 items-center rounded-full border border-border bg-secondary/50 p-1 text-sm">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={cn(
                  "rounded-full px-4 py-1.5 font-medium transition-colors",
                  filter === f.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => openProject(project)}
                aria-label={`${project.name} — ${t.projects.viewCase}`}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <div className="relative">
                  <ProjectCover project={project} className="h-36 w-full" />
                  <StatusPill status={project.status} className="absolute left-3 top-3 bg-background/70 backdrop-blur" />
                  <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full border border-border bg-background/70 text-muted-foreground opacity-0 backdrop-blur transition-all group-hover:opacity-100 group-hover:text-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.short[lang]}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    {project.tech.slice(0, 4).map((tech) => (
                      <TechBadge key={tech} tech={tech} size="sm" />
                    ))}
                    {project.tech.length > 4 && (
                      <span className="inline-flex h-6 items-center gap-0.5 rounded-md border border-border bg-secondary px-2 font-mono text-[0.65rem] text-muted-foreground">
                        <Plus className="size-2.5" />
                        {project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} open={open} onOpenChange={setOpen} />
    </section>
  )
}

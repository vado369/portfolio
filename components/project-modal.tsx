"use client"

import { ArrowUpRight, Lightbulb, Target, Wrench, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { ProjectCover } from "@/components/project-cover"
import { StatusPill } from "@/components/status-pill"
import { TechBadge } from "@/components/tech-badge"
import { Modal, ModalDescription, ModalTitle } from "@/components/ui/modal"
import type { Project } from "@/lib/content"

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null
  open: boolean
  onOpenChange: (o: boolean) => void
}) {
  const { lang, t } = useLanguage()
  if (!project) return null

  const blocks = [
    { icon: Lightbulb, label: t.projects.why, text: project.why[lang] },
    { icon: Target, label: t.projects.problem, text: project.problem[lang] },
    { icon: Zap, label: t.projects.vision, text: project.vision[lang] },
    { icon: Wrench, label: t.projects.solution, text: project.solution[lang] },
  ]

  return (
    <Modal open={open} onOpenChange={onOpenChange} closeLabel={t.projects.close} className="max-w-3xl">
      <ProjectCover project={project} className="h-40 w-full sm:h-48" />
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <ModalTitle className="text-2xl font-semibold tracking-tight">{project.name}</ModalTitle>
          <StatusPill status={project.status} />
        </div>
        <ModalDescription className="mt-2 text-pretty leading-relaxed text-muted-foreground">
          {project.short[lang]}
        </ModalDescription>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.label}>
              <div className="flex items-center gap-2">
                <b.icon className="size-4 text-primary" />
                <span className="font-mono text-xs font-medium tracking-wider text-foreground uppercase">
                  {b.label}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 border-t border-border pt-6">
          <span className="font-mono text-xs font-medium tracking-wider text-muted-foreground uppercase">
            {t.projects.tech}
          </span>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {t.projects.visit}
            <ArrowUpRight className="size-4" />
          </a>
        ) : null}
      </div>
    </Modal>
  )
}

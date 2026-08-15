"use client"

import { Blocks, Cloud, Database, Layout, Link2, Server } from "lucide-react"
import type { ComponentType } from "react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TechBadge } from "@/components/tech-badge"
import { skillGroups } from "@/lib/content"

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  backend: Server,
  frontend: Layout,
  databases: Database,
  infra: Cloud,
  blockchain: Blocks,
  apis: Link2,
}

export function Skills() {
  const { lang, t } = useLanguage()

  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker={t.skills.kicker} title={t.skills.title} subtitle={t.skills.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.id] ?? Server
            return (
              <Reveal key={group.id} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-lg bg-secondary/60 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-semibold tracking-tight">{group.label[lang]}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <TechBadge key={item} tech={item} />
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

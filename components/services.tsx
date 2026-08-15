"use client"

import { Code2, Compass, FileCode2, Layers, Puzzle, Wrench } from "lucide-react"
import type { ComponentType } from "react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { services } from "@/lib/content"

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  layers: Layers,
  code: Code2,
  wrench: Wrench,
  "file-code": FileCode2,
  puzzle: Puzzle,
  compass: Compass,
}

export function Services() {
  const { lang, t } = useLanguage()

  return (
    <section id="services" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker={t.services.kicker} title={t.services.title} subtitle={t.services.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Code2
            return (
              <Reveal key={service.id} delay={(i % 3) * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                  <div className="grid size-11 place-items-center rounded-xl bg-secondary/60 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-semibold tracking-tight">{service.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description[lang]}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

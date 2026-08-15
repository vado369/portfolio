"use client"

import { Award, Boxes, Hammer, Landmark, Repeat, Sparkles, Trophy, Users } from "lucide-react"
import { useState } from "react"
import { CertificationsModal } from "@/components/certifications-modal"
import { DistinctionsModal } from "@/components/distinctions-modal"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export function About() {
  const { t } = useLanguage()
  const [certsOpen, setCertsOpen] = useState(false)
  const [distinctionsOpen, setDistinctionsOpen] = useState(false)

  const journey = [
    { icon: Landmark, label: t.about.financeStep },
    { icon: Boxes, label: t.about.engineeringStep },
    { icon: Sparkles, label: t.about.fintechStep },
  ]

  const philosophy = [
    { icon: Repeat, label: t.about.learn },
    { icon: Boxes, label: t.about.test },
    { icon: Hammer, label: t.about.build },
  ]

  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker={t.about.kicker} title={t.about.title} />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Narrative + journey */}
          <Reveal className="flex flex-col gap-8">
            <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <div>
              <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                {t.about.journey}
              </span>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                {journey.map((step, i) => (
                  <div key={step.label} className="flex flex-1 items-center gap-3 sm:flex-col sm:items-start">
                    <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-card p-4">
                      <step.icon className="size-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium leading-tight text-foreground">{step.label}</span>
                    </div>
                    {i < journey.length - 1 && (
                      <span className="font-mono text-primary sm:hidden">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications + distinctions triggers */}
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setCertsOpen(true)}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-accent-foreground"
              >
                <Award className="size-4 text-primary" />
                {t.about.viewCerts}
              </button>
              <button
                type="button"
                onClick={() => setDistinctionsOpen(true)}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-accent-foreground"
              >
                <Trophy className="size-4 text-primary" />
                {t.about.viewDistinctions}
              </button>
            </div>
          </Reveal>

          {/* Sidebar: philosophy + specialties */}
          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                {t.about.philosophy}
              </span>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {philosophy.map((p, i) => (
                  <div key={p.label} className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-2.5 py-1.5 font-mono text-sm font-medium text-secondary-foreground">
                      <p.icon className="size-3.5 text-primary" />
                      {p.label}
                    </span>
                    {i < philosophy.length - 1 && <span className="text-muted-foreground">·</span>}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.about.philosophyText}</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                {t.about.specialties}
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.specialtiesList.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Ghezo Hub — community project, distinct treatment */}
        <Reveal delay={80} className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Users className="size-6" />
                </div>
                <div className="max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold tracking-tight">{t.about.ghezoTitle}</h3>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                      {t.about.ghezoFounded}
                    </span>
                  </div>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {t.about.ghezoText}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-baseline gap-2 sm:flex-col sm:items-end">
                <span className="font-mono text-3xl font-bold text-primary sm:text-4xl">100+</span>
                <span className="text-xs text-muted-foreground">{t.about.ghezoStat}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <CertificationsModal open={certsOpen} onOpenChange={setCertsOpen} />
      <DistinctionsModal open={distinctionsOpen} onOpenChange={setDistinctionsOpen} />
    </section>
  )
}

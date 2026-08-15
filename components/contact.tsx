"use client"

import { ArrowUpRight, Download, Mail, Phone } from "lucide-react"
import type { ComponentType, SVGProps } from "react"
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, XIcon } from "@/components/brand-icons"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { CV_PATH } from "@/lib/config"
import { CONTACT } from "@/lib/content"

const socials: { id: string; label: string; href: string; icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { id: "x", label: "X", href: CONTACT.x, icon: XIcon },
  { id: "linkedin", label: "LinkedIn", href: CONTACT.linkedin, icon: LinkedInIcon },
  { id: "github", label: "GitHub", href: CONTACT.github, icon: GitHubIcon },
  { id: "whatsapp", label: "WhatsApp", href: CONTACT.whatsapp, icon: WhatsAppIcon },
]

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 tech-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,black,transparent)]" />
            <div className="pointer-events-none absolute -bottom-16 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-wider text-primary uppercase">
                <span className="h-px w-6 bg-primary" />
                {t.contact.kicker}
              </span>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {t.contact.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {t.contact.talk}
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={CV_PATH}
                  download
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <Download className="size-4" />
                  {t.contact.downloadCv}
                </a>
              </div>

              <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3"
                >
                  <span className="grid size-10 place-items-center rounded-lg border border-border bg-secondary/50 text-primary">
                    <Phone className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs text-muted-foreground">{t.contact.phone}</span>
                    <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">
                      {CONTACT.phone}
                    </span>
                  </span>
                </a>
                <a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-lg border border-border bg-secondary/50 text-primary">
                    <Mail className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs text-muted-foreground">{t.contact.email}</span>
                    <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">
                      {CONTACT.email}
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target={s.href === "#" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <s.icon className="size-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

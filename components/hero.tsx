"use client"

import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { CV_PATH } from "@/lib/config"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      {/* Technical backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 tech-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 py-1.5 pr-3.5 pl-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative grid size-5 place-items-center">
              <span className="absolute size-2 animate-ping rounded-full bg-emerald-500/70" />
              <span className="size-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.availability}
          </div>

          <h1 className="mt-6 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Lénaïc Oswald B.
            <br />
            <span className="text-primary">HOUNKPATIN</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm">
            <span className="rounded-md bg-secondary px-2.5 py-1 text-secondary-foreground">
              {t.hero.role}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="size-3.5" />
              Parakou, Bénin
            </span>
          </div>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {t.hero.talk}
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {t.hero.viewProjects}
            </a>
            {/* <a
              href={CV_PATH}
              download
              className="inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="size-4" />
              {t.hero.downloadCv}
            </a> */}
          </div>
        </div>

        {/* Terminal signature card */}
        <div className="reveal is-visible relative" style={{ transitionDelay: "150ms" }}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/5">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-3">
              <span className="size-3 rounded-full bg-red-400/80" />
              <span className="size-3 rounded-full bg-amber-400/80" />
              <span className="size-3 rounded-full bg-emerald-400/80" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">~/philosophy.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-relaxed text-foreground">
              <code>
                <span className="text-muted-foreground">{"// Learn. Test. Build."}</span>
                {"\n"}
                <span className="text-primary">const</span> engineer = {"{"}
                {"\n"}
                {"  "}focus: [<span className="text-emerald-500">{'"fintech"'}</span>,{" "}
                <span className="text-emerald-500">{'"blockchain"'}</span>],
                {"\n"}
                {"  "}stack: [<span className="text-emerald-500">{'"Laravel"'}</span>,{" "}
                <span className="text-emerald-500">{'"Next.js"'}</span>,{" "}
                <span className="text-emerald-500">{'"Solidity"'}</span>],
                {"\n"}
                {"  "}mission: <span className="text-emerald-500">{'"solve real problems"'}</span>,
                {"\n"}
                {"}"}
                <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary" />
              </code>
            </pre>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mt-14 hidden w-fit items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground lg:flex"
      >
        <ArrowDown className="size-3.5 animate-bounce" />
        {t.hero.scroll}
      </a>
    </section>
  )
}

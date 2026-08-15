"use client"

import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { LangToggle, ThemeToggle } from "@/components/site-controls"
import { cn } from "@/lib/utils"

const SECTIONS = ["home", "about", "projects", "services", "contact"] as const

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Lénaïc Hounkpatin — Accueil">
          <span className="grid size-8 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
            L
          </span>
          <span className="font-mono text-sm font-medium tracking-tight text-foreground">
            hounkpatin<span className="text-primary">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active === id && (
                <span className="absolute inset-0 -z-10 rounded-full bg-secondary/70" aria-hidden />
              )}
              {t.nav[id]}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LangToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-border bg-secondary/60 text-foreground"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                active === id ? "bg-secondary text-foreground" : "text-muted-foreground",
              )}
            >
              {t.nav[id]}
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-border pt-4">
            <span className="font-mono text-xs text-muted-foreground">Langue / Language</span>
            <LangToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

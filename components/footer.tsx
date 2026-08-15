"use client"

import { useLanguage } from "@/components/language-provider"
import { SITE_NAME } from "@/lib/config"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-muted-foreground">
          {"© "}
          {year} {SITE_NAME}
        </p>
        <p className="text-xs text-muted-foreground">
          {t.footer.built} {SITE_NAME}
        </p>
      </div>
    </footer>
  )
}

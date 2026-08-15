"use client"

import { Trophy } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Modal, ModalDescription, ModalTitle } from "@/components/ui/modal"
import { distinctions } from "@/lib/content"

export function DistinctionsModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const { lang, t } = useLanguage()

  return (
    <Modal open={open} onOpenChange={onOpenChange} closeLabel={t.projects.close}>
      <div className="border-b border-border bg-secondary/30 px-5 py-5 sm:px-6">
        <ModalTitle className="text-xl font-semibold tracking-tight">{t.modals.distinctionsTitle}</ModalTitle>
        <ModalDescription className="mt-1 text-sm text-muted-foreground">
          {t.modals.distinctionsSubtitle}
        </ModalDescription>
      </div>
      <ul className="flex flex-col gap-3 p-5 sm:p-6">
        {distinctions.map((d) => (
          <li
            key={d.id}
            className="flex min-w-0 items-start gap-3 rounded-xl border border-border bg-secondary/30 p-4 sm:gap-4"
          >
            <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <Trophy className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <p className="min-w-0 break-words font-medium leading-snug text-foreground">{d.title[lang]}</p>
                <span className="shrink-0 rounded-full border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground">
                  {d.year}
                </span>
              </div>
              {d.detail[lang] ? (
                <p className="mt-1 text-sm text-muted-foreground">{d.detail[lang]}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Modal>
  )
}

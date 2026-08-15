"use client"

import { Award, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Modal, ModalDescription, ModalTitle } from "@/components/ui/modal"
import { certifications } from "@/lib/content"

export function CertificationsModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const { t } = useLanguage()

  return (
    <Modal open={open} onOpenChange={onOpenChange} closeLabel={t.projects.close}>
      <div className="border-b border-border bg-secondary/30 px-6 py-5">
        <ModalTitle className="text-xl font-semibold tracking-tight">{t.modals.certsTitle}</ModalTitle>
        <ModalDescription className="mt-1 text-sm text-muted-foreground">
          {t.modals.certsSubtitle}
        </ModalDescription>
      </div>
      <ul className="divide-y divide-border">
        {certifications.map((cert) => (
          <li key={cert.id} className="flex items-center gap-4 px-6 py-4">
            <div className="grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-secondary/50 text-primary">
              <Award className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-foreground">{cert.name}</p>
              <p className="truncate font-mono text-xs text-muted-foreground">{cert.institution}</p>
            </div>
            {cert.link ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${cert.name} — ${cert.institution}`}
                className="grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <ExternalLink className="size-4" />
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Modal>
  )
}

"use client"

import { Tooltip } from "@base-ui/react/tooltip"
import { cn } from "@/lib/utils"

// Compact abbreviations shown inside each chip; full name appears in the tooltip.
const ABBREV: Record<string, string> = {
  "Node.js": "Node",
  JavaScript: "JS",
  TypeScript: "TS",
  PostgreSQL: "PG",
  "React Native": "RN",
  "Smart Contracts": "SC",
  "REST APIs": "REST",
  "Telegram API": "TG",
  "Meta API": "Meta",
  "Google Apps Script": "GAS",
  "Ethers.js": "Ethers",
  "Tailwind CSS": "TW",
  "PHP Desktop": "PHPd",
  "CicaPay API": "Cica",
  "ChangeNOW API": "CNOW",
  "Fedapay API": "Feda",
  "PayDunya API": "PayD",
}

function label(tech: string) {
  if (ABBREV[tech]) return ABBREV[tech]
  return tech.length > 6 ? tech.slice(0, 5) : tech
}

export function TechBadge({ tech, size = "md" }: { tech: string; size?: "sm" | "md" }) {
  return (
    <Tooltip.Root delay={120}>
      <Tooltip.Trigger
        render={
          <span
            className={cn(
              "inline-flex cursor-default items-center justify-center rounded-md border border-border bg-secondary font-mono font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-accent-foreground",
              size === "sm" ? "h-6 px-2 text-[0.65rem]" : "h-7 px-2.5 text-xs",
            )}
          >
            {label(tech)}
          </span>
        }
      />
      <Tooltip.Portal>
        <Tooltip.Positioner sideOffset={6}>
          <Tooltip.Popup className="z-50 rounded-md border border-border bg-popover px-2.5 py-1 font-mono text-xs text-popover-foreground shadow-md transition-all data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
            {tech}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

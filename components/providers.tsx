"use client"

import { Tooltip } from "@base-ui/react/tooltip"
import type { ReactNode } from "react"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <LanguageProvider>
        <Tooltip.Provider delay={120}>{children}</Tooltip.Provider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

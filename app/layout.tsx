import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const siteUrl = 'https://lenaic-hounkpatin.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Lénaïc Oswald B. HOUNKPATIN — Software Engineer',
  description:
    'Software Engineer basé à Parakou, Bénin. Spécialisé en fintech, blockchain, Mobile Money, microservices et solutions logicielles sur mesure.',
  keywords: [
    'Software Engineer',
    'Fintech',
    'Blockchain',
    'Mobile Money',
    'Bénin',
    'Parakou',
    'Laravel',
    'Next.js',
    'Solidity',
    'Lénaïc Hounkpatin',
  ],
  authors: [{ name: 'Lénaïc Oswald B. HOUNKPATIN' }],
  creator: 'Lénaïc Oswald B. HOUNKPATIN',
  openGraph: {
    type: 'website',
    title: 'Lénaïc Oswald B. HOUNKPATIN — Software Engineer',
    description:
      'Solutions technologiques concrètes en fintech, blockchain et systèmes logiciels.',
    url: siteUrl,
    siteName: 'Lénaïc Oswald B. HOUNKPATIN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lénaïc Oswald B. HOUNKPATIN — Software Engineer',
    description:
      'Solutions technologiques concrètes en fintech, blockchain et systèmes logiciels.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f8fb' },
    { media: '(prefers-color-scheme: dark)', color: '#111726' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ascora - Global Import & Export Solutions',
  description: 'Premier B2B platform connecting international businesses with global import and export opportunities. Trade with confidence across 150+ countries.',
  generator: 'v0.app',
  keywords: 'import export, B2B trading, global commerce, international business, wholesale',
  openGraph: {
    title: 'Ascora - Global Import & Export Solutions',
    description: 'Connect with international trading partners and expand your global business reach.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ascora',
    description: 'Global B2B import-export platform connecting businesses across 150+ countries',
    url: 'https://ascora.io',
    logo: 'https://ascora.io/logo.png',
    sameAs: [
      'https://facebook.com/ascora',
      'https://twitter.com/ascora',
      'https://linkedin.com/company/ascora',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+1-555-123-4567',
      email: 'shashikantt@ascora.in',
      areaServed: 'Global',
      availableLanguage: ['en', 'es', 'fr', 'de', 'zh', 'ar'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'New York',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

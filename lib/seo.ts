import { Metadata } from 'next'

export function generatePageMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const defaults: Metadata = {
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Ascora',
      images: [
        {
          url: 'https://ascora.io/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Ascora - Global Import & Export Solutions',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@ascora',
    },
  }

  return {
    ...defaults,
    ...overrides,
    openGraph: {
      ...defaults.openGraph,
      ...(overrides.openGraph || {}),
    },
  }
}

export const seoPages = {
  home: {
    title: 'Ascora - Global Import & Export Solutions',
    description: 'Premier B2B platform connecting international businesses with global import and export opportunities. Trade with confidence across 150+ countries.',
  },
  products: {
    title: 'Products & Services - Ascora',
    description: 'Comprehensive import-export solutions including logistics, compliance, analytics, and market insights for global businesses.',
  },
  exportServices: {
    title: 'Export Services - Ascora',
    description: 'Professional export services including documentation, compliance, logistics, and market access for international traders.',
  },
  industries: {
    title: 'Industries - Ascora',
    description: 'Industry-specific solutions for textiles, electronics, chemicals, food, agriculture, and precious metals trading.',
  },
  globalMarkets: {
    title: 'Global Markets - Ascora',
    description: 'Explore 150+ countries and access emerging markets with Ascora. Connect with 130,000+ verified buyers worldwide.',
  },
  about: {
    title: 'About Ascora - Global Trade Leaders',
    description: 'Learn about Ascora, our mission to simplify international trade, and how we help businesses grow globally since 2015.',
  },
  contact: {
    title: 'Contact Ascora - Get In Touch',
    description: 'Contact our team for questions, demos, or partnership opportunities. We respond within 24 hours.',
  },
}

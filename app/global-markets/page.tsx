import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { TrendingUp, Users, Package, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Global Markets - Ascora',
  description: 'Explore 150+ countries and access emerging markets with Ascora. Connect with 130,000+ verified buyers worldwide.',
  keywords: 'global markets, international trade, emerging markets, B2B buyers, trade opportunities',
  openGraph: {
    title: 'Global Markets - Trade Worldwide',
    description: 'Access 150+ countries and connect with verified international buyers',
    type: 'website',
  },
}

const regions = [
  {
    name: 'Asia Pacific',
    description: 'High-volume markets for grains and oilseeds',
    countries: 'China, Vietnam, Thailand, Indonesia, Bangladesh',
    opportunities: '40,000+ buyers',
    growth: '38% YoY',
    highlights: [
      'Strong demand for rice & soybean',
      'Fast-growing economies',
      'High volume trade',
      'Food & feed industry demand',
    ],
  },
  {
    name: 'Middle East & Africa',
    description: 'Import-driven markets with consistent demand',
    countries: 'UAE, Saudi Arabia, Iran, Iraq, Nigeria, South Africa',
    opportunities: '30,000+ buyers',
    growth: '32% YoY',
    highlights: [
      'High dependency on food imports',
      'Large population demand',
      'Stable B2B trade',
      'Strong rice & pulses consumption',
    ],
  },
  {
    name: 'Europe',
    description: 'Premium markets with strict quality standards',
    countries: 'Germany, UK, Netherlands, France',
    opportunities: '20,000+ buyers',
    growth: '12% YoY',
    highlights: [
      'High demand for turmeric & spices',
      'Premium pricing markets',
      'Strict compliance requirements',
      'Organic & health product demand',
    ],
  },
  {
    name: 'Americas',
    description: 'High-value markets driven by diaspora demand',
    countries: 'USA, Canada',
    opportunities: '25,000+ buyers',
    growth: '24% YoY',
    highlights: [
      'Strong demand for pulses & spices',
      'Indian diaspora consumption',
      'Health & organic trends',
      'High purchasing power',
    ],
  },
]

const keyMarkets = [
  { country: 'China', volume: '$520B', growth: '18%', sectors: 'Soybean, Industrial Goods' },
  { country: 'USA', volume: '$480B', growth: '15%', sectors: 'Turmeric, Tur Dal, Food Products' },
  { country: 'UAE', volume: '$150B', growth: '20%', sectors: 'Rice, Pulses, Re-exports' },
  { country: 'Vietnam', volume: '$120B', growth: '16%', sectors: 'Soybean, Agriculture' },
  { country: 'Saudi Arabia', volume: '$130B', growth: '14%', sectors: 'Rice, Food Imports' },
  { country: 'Germany', volume: '$110B', growth: '9%', sectors: 'Turmeric, Organic Products' },
]

export default function GlobalMarketsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Global Markets
            </h1>
            <p className="text-lg text-muted-foreground">
              Access 150+ countries and tap into 130,000+ verified buyers worldwide. Expand your reach to emerging and established markets.
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Package, label: 'Countries', value: '150+' },
              { icon: Users, label: 'Verified Buyers', value: '130K+' },
              { icon: TrendingUp, label: 'Trade Volume', value: '$2B+' },
              { icon: Zap, label: 'Opportunity Score', value: '9.2/10' },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="p-6 rounded-xl bg-card border border-border text-center">
                  <Icon className="text-accent mx-auto mb-3" size={28} />
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Regions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Regional Markets
            </h2>
            <p className="text-lg text-muted-foreground">
              Each region presents unique opportunities and growth potential
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {regions.map((region, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-200 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {region.name}
                    </h3>
                    <p className="text-muted-foreground">{region.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent font-bold text-lg">{region.growth}</p>
                    <p className="text-xs text-muted-foreground">annual growth</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6 py-6 border-t border-b border-border">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Key Countries
                    </p>
                    <p className="text-sm text-foreground">{region.countries}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Opportunities
                    </p>
                    <p className="text-sm font-semibold text-primary">{region.opportunities}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {region.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Markets */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Top Trading Markets
            </h2>
            <p className="text-lg text-muted-foreground">
              Where most trade volume happens
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Country</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Annual Volume</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Growth Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Key Sectors</th>
                </tr>
              </thead>
              <tbody>
                {keyMarkets.map((market, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-foreground">{market.country}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-primary font-bold">{market.volume}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                        {market.growth}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-muted-foreground">{market.sectors}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Market Insights */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-secondary/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Market Insights & Trends
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-4">Fastest Growing Markets</h3>
                <ul className="space-y-3">
                  {[
                    'India - 32% growth in imports',
                    'Vietnam - E-commerce boom',
                    'Nigeria - Infrastructure demand',
                    'Mexico - Manufacturing shift',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <TrendingUp size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-4">Trade Agreements</h3>
                <ul className="space-y-3">
                  {[
                    'RCEP - 10 Asian nations',
                    'USMCA - North America',
                    'EU Single Market',
                    'AfCFTA - African continent',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Package size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Go Global?
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Access 150+ markets and connect with verified buyers worldwide today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Start Exploring Markets
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

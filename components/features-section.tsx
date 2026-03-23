import { Zap, BarChart3, Lock, Users, TrendingUp, Headphones } from 'lucide-react'
import { Container } from '@/components/ui/container'

const features = [
  {
    icon: Zap,
    title: 'Fast Onboarding',
    description: 'Get verified and start trading in minutes. Our streamlined process gets you operational quickly.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track market trends and optimize your trading strategy with comprehensive dashboards.',
  },
  {
    icon: Lock,
    title: 'Secure Transactions',
    description: 'Bank-level security ensures all your transactions and data are protected.',
  },
  {
    icon: Users,
    title: 'Verified Partners',
    description: 'All sellers and buyers are verified to ensure reliable business relationships.',
  },
  {
    icon: TrendingUp,
    title: 'Market Insights',
    description: 'Stay ahead with pricing data, demand forecasts, and competitive analysis.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated support team available around the clock to assist you.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Ascora
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading features designed specifically for international B2B commerce
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

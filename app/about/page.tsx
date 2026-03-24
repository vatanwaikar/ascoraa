import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Users, Target, Lightbulb, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Ascora - Global Trade Leaders',
  description: 'Learn about Ascora, our mission to simplify international trade, and how we help businesses grow globally.',
  keywords: 'about Ascora, B2B trading platform, international commerce, global trade leaders',
  openGraph: {
    title: 'About Ascora',
    description: 'Connecting global businesses since 2015',
    type: 'website',
  },
}

const values = [
  {
    icon: Target,
    title: 'Customer First',
    description: 'We prioritize your success. Every feature and service is designed with your needs in mind.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuous improvement drives us. We leverage technology to solve real trading challenges.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in service quality, compliance, and expertise.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build a network of trusted partners united by a mission to grow internationally.',
  },
]

const teamMembers = [
  {
    name: 'Rajesh Patel',
    role: 'Founder & CEO',
    bio: '20+ years in international trade and logistics',
  },
  {
    name: 'Sophie Laurent',
    role: 'COO',
    bio: 'Expert in customs compliance and regulations',
  },
  {
    name: 'Ming Chen',
    role: 'CTO',
    bio: 'Former fintech executive, tech innovation leader',
  },
  {
    name: 'Amara Okonkwo',
    role: 'VP Partnerships',
    bio: 'Global network builder with 15 years experience',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About Ascora
            </h1>
            <p className="text-lg text-muted-foreground">
              Connecting global businesses and simplifying international trade since 2015.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
    Our Mission
  </h2>

  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
    At Ascora Enterprises, we help Indian businesses expand globally through reliable import and export solutions, connecting them with trusted international partners.
  </p>

  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
    From sourcing quality products to managing documentation, compliance, and logistics, we simplify global trade for our clients.
  </p>

  <p className="text-lg text-muted-foreground leading-relaxed">
    Our goal is to bridge global markets with efficiency, transparency, and long-term business growth.
  </p>
</div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="text-4xl font-bold text-primary">Founded</div>
                    <div className="text-2xl font-bold text-foreground">2025</div>
                    <div className="pt-6 border-t border-border">
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-2">100+ Verified Suppliers</div>
                          <div className="w-full bg-secondary rounded-full h-2"></div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-2">150+ Countries</div>
                          <div className="w-full bg-secondary rounded-full h-2"></div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-2">$2B+ Annual Trade</div>
                          <div className="w-full bg-secondary rounded-full h-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Our Capabilities Section */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
  <div className="text-center mb-16">
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
      Our Capabilities
    </h2>
    <p className="text-lg text-muted-foreground">
      Built to support seamless global trade at every stage
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: 'Supplier Verification',
        desc: 'We ensure every supplier meets quality and reliability standards before onboarding.',
      },
      {
        title: 'Bulk Order Handling',
        desc: 'Efficient management of large-scale orders with consistent quality control.',
      },
      {
        title: 'Export Documentation',
        desc: 'Complete support for invoices, packing lists, certifications, and compliance.',
      },
      {
        title: 'Logistics Coordination',
        desc: 'Smooth handling of shipping, freight forwarding, and delivery timelines.',
      },
      {
        title: 'Custom Requirements',
        desc: 'Flexible solutions tailored to your product specifications and market needs.',
      },
      {
        title: 'End-to-End Support',
        desc: 'From inquiry to delivery, we stay with you throughout the entire process.',
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-200"
      >
        <h3 className="font-semibold text-lg text-foreground mb-3">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-border">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">9+</div>
                <p className="text-foreground font-medium">Years in Business</p>
              </div>
             <div>
  <div className="text-4xl font-bold text-primary mb-2">100+</div>
  <p className="text-foreground font-medium">Verified Suppliers</p> 
</div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-foreground font-medium">Countries Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">$2B+</div>
                <p className="text-foreground font-medium">Trade Volume</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Join the Ascora Community
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Ready to expand your global business? Get started with Ascora today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Start Trading Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

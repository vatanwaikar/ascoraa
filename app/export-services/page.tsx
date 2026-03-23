  import { Metadata } from 'next'
  import { Navigation } from '@/components/navigation'
  import { Footer } from '@/components/footer'
  import { ArrowRight, CheckCircle2, Zap } from 'lucide-react'
  import Link from 'next/link'

  export const metadata: Metadata = {
    title: 'Export Services - Ascora',
    description: 'Professional export services including documentation, compliance, logistics, and market access.',
    keywords: 'export documentation, customs clearance, export compliance, logistics coordination, market access',
    openGraph: {
      title: 'Expert Export Services - Ascora',
      description: 'Leave the complexity to us. Our expert team handles every aspect of your export operations.',
      type: 'website',
    },
  }

  const services = [
    {
      title: 'Export Documentation',
      description: 'Complete handling of all export paperwork and compliance documents',
      items: [
        'Commercial invoices',
        'Packing lists',
        'Bills of lading',
        'Certificates of origin',
        'Export permits',
        'Insurance documentation',
      ],
    },
    {
      title: 'Customs Clearance',
      description: 'Expert navigation through customs procedures and regulations',
      items: [
        'Pre-clearance support',
        'Tariff classification',
        'Regulatory compliance check',
        'Customs brokerage',
        'Appeals assistance',
        '24/7 support',
      ],
    },
    {
      title: 'Product Registration',
      description: 'Get your products registered and approved in target markets',
      items: [
        'Market requirement analysis',
        'Certification assistance',
        'Regulatory filing',
        'Quality standards compliance',
        'Testing coordination',
        'Approval tracking',
      ],
    },
    {
      title: 'Logistics Coordination',
      description: 'End-to-end logistics management from warehouse to doorstep',
      items: [
        'Freight negotiation',
        'Route optimization',
        'Real-time tracking',
        'Warehouse coordination',
        'Last-mile delivery',
        'Claims handling',
      ],
    },
    {
      title: 'Quality Assurance',
      description: 'Ensure your exports meet international quality standards',
      items: [
        'Pre-shipment inspection',
        'Quality testing',
        'Standards certification',
        'Defect assessment',
        'Documentation review',
        'Corrective action support',
      ],
    },
    {
      title: 'Market Access',
      description: 'Find and connect with buyers in your target markets',
      items: [
        'Buyer identification',
        'Trade show participation',
        'B2B networking',
        'Buyer vetting',
        'Agreement negotiation',
        'Partnership facilitation',
      ],
    },
  ]

  const benefits = [
    'Reduce export time by up to 60%',
    'Eliminate compliance errors',
    'Access 150+ countries immediately',
    'Get competitive freight rates',
    'Meet all regulatory requirements',
    'Scale your export business rapidly',
  ]

  export default function ExportServicesPage() {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-20">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Expert Export Services
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Leave the complexity to us. Our expert team handles every aspect of your export operations, from documentation to delivery.
                </p>

                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Schedule Consultation
                  <ArrowRight size={20} />
                </Link>
              </div>

              <div className="hidden md:block">
  <div className="bg-white border rounded-2xl p-8 shadow-lg space-y-6">

    <h3 className="text-xl font-semibold">
      Export Overview
    </h3>

    <div className="space-y-4 text-sm">
      <div className="flex justify-between">
        <span>Markets Covered</span>
        <span className="font-semibold">150+ Countries</span>
      </div>

      <div className="flex justify-between">
        <span>Processing Time</span>
        <span className="font-semibold">5–7 Days</span>
      </div>

      <div className="flex justify-between">
        <span>Success Rate</span>
        <span className="font-semibold">98%</span>
      </div>

      <div className="flex justify-between">
        <span>Global Partners</span>
        <span className="font-semibold">500+</span>
      </div>
    </div>

    <Link
      href="/contact"
      className="block text-center bg-black text-white py-2 rounded-lg"
    >
      Get Free Consultation
    </Link>

  </div>
</div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Export Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions covering every step of the export process
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Zap className="text-accent" size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{service.title}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="bg-secondary/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                How It Works
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: '1', title: 'Consultation', desc: 'Discuss your export needs' },
                  { step: '2', title: 'Planning', desc: 'Create strategy & timeline' },
                  { step: '3', title: 'Execution', desc: 'Handle all logistics' },
                  { step: '4', title: 'Support', desc: 'Ongoing partnership' },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Start Exporting with Confidence
              </h2>
              <p className="text-white/90 mb-8">
                Our expert team is ready to guide you through every step of your export journey.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-accent rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

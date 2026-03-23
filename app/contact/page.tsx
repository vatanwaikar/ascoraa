'use client'

import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all">
              <Mail className="text-accent mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-2">shashikantt@ascora.in</p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all">
              <Phone className="text-accent mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground mb-2">+91 9823111103</p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all">
              <MapPin className="text-accent mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">Headquarters</h3>
              <p className="text-sm text-muted-foreground mb-2">308,Patil Plaza, Swargate, Pune
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all">
              <Clock className="text-accent mb-4" size={28} />
              <h3 className="font-semibold text-foreground mb-2">We Chat China</h3>
              <p className="text-sm text-muted-foreground mb-2">+86 13434 181103</p>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Contact Us?</h2>
                <ul className="space-y-4">
                  {[
                    'Get personalized solutions for your business',
                    'Schedule a demo of our platform',
                    'Discuss partnership opportunities',
                    'Ask about our enterprise plans',
                    'Get industry insights and market data',
                    'Learn about our compliance support',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-border">
  <h3 className="font-semibold text-foreground mb-4">Why Choose Us</h3>

  <div className="space-y-3 text-sm text-foreground">
    <p>✔ Global sourcing network</p>
    <p>✔ Quality verified suppliers</p>
    <p>✔ Secure export documentation</p>
    <p>✔ Reliable logistics support</p>
  </div>
</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'How long does verification take?',
                a: 'Most businesses are verified within 24-48 hours. Premium verification takes 2-3 business days.',
              },
              {
                q: 'What are your pricing plans?',
                a: 'We offer flexible plans starting from free to enterprise. Contact us for custom pricing based on your needs.',
              },
              {
                q: 'Do you support multiple countries?',
                a: 'Yes! We support 150+ countries. Our compliance team handles regulations for all major markets.',
              },
              {
                q: 'How do I get started?',
                a: 'Sign up on our platform, complete verification, and start browsing or listing products within minutes.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start?
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Join thousands of global traders on Ascora today.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Fill Out Form Above
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Container } from '@/components/ui/container'

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Expand Your Global Trade?
        </h2>

        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of businesses already growing internationally with Ascora. Get verified in minutes and access our entire network of verified trading partners.
        </p>

        {/* Features List */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-left max-w-3xl mx-auto">
          <div className="flex gap-3 items-start">
            <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-primary-foreground">Instant Verification</p>
              <p className="text-sm text-primary-foreground/80">Start trading immediately</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-primary-foreground">No Setup Fees</p>
              <p className="text-sm text-primary-foreground/80">Zero hidden charges</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-primary-foreground">Full Support</p>
              <p className="text-sm text-primary-foreground/80">Dedicated team ready</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Get Started Free
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/industries"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-primary-foreground border-2 border-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all duration-200"
          >
            Explore Industries
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-sm text-primary-foreground/80">
  Powering international trade with verified suppliers, seamless logistics, and global reach.
        </p>
      </div>
    </section>
  )
}

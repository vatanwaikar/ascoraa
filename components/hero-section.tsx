import Link from 'next/link'
import { ArrowRight, Globe } from 'lucide-react'
import { Container } from '@/components/ui/container'

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden min-h-screen sm:h-screen max-h-[900px] flex items-center">
      {/* Full-width Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover"
  poster="/hero-port.jpg"
>
  <source src="/videos/port.mp4" type="video/mp4" />
</video>
        
        {/* Dark Overlay (45% opacity) */}
        <div className="absolute inset-0 bg-black/45"></div>
        
        {/* Additional gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex items-center w-full">
        <Container className="h-full flex items-center w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-6 w-fit px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
              <Globe size={16} className="text-white" />
              <span className="text-sm font-medium text-white">Global Trade Platform</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expand Your Business Globally
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Connect with verified international partners and access 150+ markets. Simplify your import-export operations with our comprehensive B2B platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"              >
                Start Trading Today
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/export-services"
className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30 backdrop-blur-sm"              >
                Explore Solutions
              </Link>
            </div>

           
          </div>

          {/* Visual - Hidden on video background */}
          <div className="hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 sm:p-12 border border-border/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 text-primary text-lg font-bold">
                      📦
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Smart Export Tools</h3>
                      <p className="text-sm text-muted-foreground">Manage shipments efficiently</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 text-primary text-lg font-bold">
                      🌍
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Global Network</h3>
                      <p className="text-sm text-muted-foreground">Access worldwide buyers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 text-primary text-lg font-bold">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Verified Partners</h3>
                      <p className="text-sm text-muted-foreground">Trade with confidence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Container>
      </div>
    </section>
  )
}

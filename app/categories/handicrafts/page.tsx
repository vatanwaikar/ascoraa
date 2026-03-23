import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { HandicraftsClientComponent } from './client-component'
import { getProductsByCategory } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Handicrafts - Ascora',
  description: 'Traditional handmade crafts, wooden items, brass work, and authentic Indian art for export',
  keywords: 'handicrafts, handmade crafts, wooden handicrafts, brass work',
}

const products = getProductsByCategory('handicraft')

export default function HandicraftsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Handicrafts
            </h1>
            <p className="text-lg text-muted-foreground">
              Authentic handmade crafts and traditional artisan products for global markets.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <HandicraftsClientComponent products={products} />

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Custom Handicraft Orders
            </h2>
            <p className="text-white/90 mb-8">
              Connect with our artisans for customized handicraft products and bulk orders.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-amber-600 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Contact Sales
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

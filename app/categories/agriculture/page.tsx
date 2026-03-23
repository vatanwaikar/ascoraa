import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { AgricultureClientComponent } from './client-component'
import { getProductsByCategory } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Agriculture Products - Ascora',
  description: 'Premium agriculture export products including rice, wheat, spices, fresh produce, and more',
  keywords: 'agriculture exports, rice, wheat, spices, agro products',
}

const products = getProductsByCategory('agriculture')

export default function AgriculturePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Agriculture Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium agricultural exports from farm to global markets. Quality assured and certified products.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <AgricultureClientComponent products={products} />

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Custom Agriculture Products?
            </h2>
            <p className="text-white/90 mb-8">
              Contact our specialists for bulk orders and custom requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-white/90 transition-colors"
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

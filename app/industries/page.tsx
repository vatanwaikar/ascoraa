import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Export Product Categories - Ascora',
  description: 'Explore our major export product categories including agriculture products, handicrafts, and automobile industry components.',
  keywords: 'agriculture exports, handicrafts, automobile industry, export products',
  openGraph: {
    title: 'Export Product Categories - Ascora',
    description: 'Browse our product categories',
    type: 'website',
  },
}

const categories = [
  {
    id: 'agriculture',
    name: 'Agriculture',
    description: 'Premium agricultural products including rice, wheat, spices, fresh produce, and more',
    image: '/industries/agriculture.webp',
    href: '/categories/agriculture',
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts',
    description: 'Traditional handmade crafts, wooden items, brass work, and authentic Indian art',
    image: '/industries/handicraft.jpeg',
    href: '/categories/handicrafts',
  },
  {
    id: 'automobile',
    name: 'Automobile Industry',
    description: 'High-quality auto parts, engine components, and automotive accessories',
    image: '/industries/automobile.jpg',
    href: '/categories/automobile',
  },
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Export Product Categories
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our major export product categories including agriculture products, handicrafts, and automobile industry components.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:scale-105 h-full flex flex-col">
                  {/* Image/Icon Area */}
                  <div className="relative h-48 overflow-hidden">
  <Image
    src={category.image}
    alt={category.name}
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
</div>
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {category.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary font-semibold pt-4 border-t border-border">
                      View Products
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


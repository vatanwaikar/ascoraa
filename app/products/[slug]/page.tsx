import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getProductBySlug, getCategoryLabel, getCategoryColor } from '@/lib/products'
import Link from 'next/link'
import { ArrowLeft, Zap } from 'lucide-react'
import { ProductInquiryForm } from '@/components/product-inquiry-form'
import { PriceRange } from '@/components/price-range'
import { QuickStats } from '@/components/quick-stats'
import { ProductImageGallery } from '@/components/product-image-gallery'
import { ProductInfoCards } from '@/components/product-info-cards'
import { TrustPanel } from '@/components/trust-panel'
import { StickyCTA } from '@/components/sticky-cta'
import { RelatedProducts } from '@/components/related-products'
import { use } from 'react'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Product Not Found - Ascora',
    }
  }

  return {
    title: `${product.name} - Premium B2B Export | Ascora`,
    description: product.description,
    keywords: `${product.name}, export, ${product.category}, B2B`,
    openGraph: {
      title: `${product.name} - Ascora B2B Export`,
      description: product.description,
      images: [product.image],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const categoryLabel = getCategoryLabel(product.category)
  const categoryColor = getCategoryColor(product.category)
  const categoryLink = `/categories/${product.category === 'handicraft' ? 'handicrafts' : product.category}`
  const unitLabel = product.category === 'automobile' ? 'Units' : product.category === 'agriculture' ? 'Tons' : 'Pieces'

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation />
      <main className="pt-24 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link 
            href={categoryLink} 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to {categoryLabel}
          </Link>
        </div>

        {/* Hero Product Section with Gradient Background */}
        <section className="relative">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-linear-to-b from-blue-50/40 to-transparent dark:from-blue-950/20 dark:to-transparent pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content Container with Shadow */}
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="bg-white dark:bg-gray-900 p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                  {/* Left Column - Image Gallery + Stats + Trust */}
                  <div className="flex flex-col gap-8">
                    {/* Product Image */}
                    <ProductImageGallery 
                      mainImage={product.image} 
                      productName={product.name}
                    />

                    {/* Quick Stats */}
                    <div>
                      <QuickStats />
                    </div>

                    {/* Trust Panel */}
                    <div>
                      <TrustPanel />
                    </div>
                  </div>

                  {/* Right Column - Product Details */}
                  <div className="flex flex-col gap-8">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r ${categoryColor} text-white rounded-full text-sm font-semibold shadow-lg`}>
                        <Zap size={14} />
                        {categoryLabel}
                      </div>
                    </div>

                    {/* Product Title */}
                    <div>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 leading-tight">
                        {product.name}
                      </h1>
                      <p className="text-base md:text-lg text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2">
                        ✓ Direct from Indian Manufacturer
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Price Range */}
                    <div>
                      <PriceRange
                        minPrice={product.minPrice}
                        maxPrice={product.maxPrice}
                        sampleMoq={product.sampleMoq}
                        mainMoq={product.mainMoq}
                        size={product.size}
                      />
                    </div>

                    {/* Product Info Cards */}
                    <div>
                      <ProductInfoCards 
                        sampleMoq={product.sampleMoq}
                        mainMoq={product.mainMoq}
                        hsCode={product.hsCode}
                        size={product.size}
                      />
                    </div>

                    {/* QA Section */}
                    <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6">
                      <p className="text-sm text-green-900 dark:text-green-100">
                        <span className="font-bold">✓ ISO Certified Quality</span> - All products meet international export standards and quality assurance requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        </div>

        {/* CTA Section - Get Best Price */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get Best Price Instantly
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              Connect with our verified supplier for bulk orders
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Response time: Within 2 hours • WhatsApp support available
            </p>
          </div>
        </section>

        {/* Inquiry Form Section - Premium Card */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            {/* Blur gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"></div>

            <div className="relative z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800">
              <div className="bg-linear-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 px-8 md:px-12 py-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Send Your Inquiry
                </h2>
                <p className="text-blue-100">
                  Product: <strong className="text-white">{product.name}</strong> • Get response within 2 hours
                </p>
              </div>
              
              <div className="p-8 md:p-12">
                <ProductInquiryForm productName={product.name} productId={product.id} />
              </div>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <div className="border-t border-gray-200 dark:border-gray-800">
          <RelatedProducts 
            currentProductId={product.id} 
            category={product.category}
            limit={4}
          />
        </div>

        {/* Trust & Support Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Why Buyers Trust Ascora
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Global Importers Trust Us</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Quality Guaranteed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-600 to-pink-700 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Customer Support</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky CTA (Mobile) */}
      <StickyCTA />

      <Footer />
    </div>
  )
}


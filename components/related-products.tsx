'use client'

import { getProductsByCategory, CategoryType } from '@/lib/products'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Product } from '@/lib/types'

interface RelatedProductsProps {
  currentProductId: string
  category: CategoryType
  limit?: number
}

export function RelatedProducts({ currentProductId, category, limit = 4 }: RelatedProductsProps) {
  const products = getProductsByCategory(category)
  const related = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, limit)

  if (related.length === 0) {
    return null
  }

  const categoryLabel =
    category === 'agriculture'
      ? 'Agriculture'
      : category === 'automobile'
        ? 'Automobile'
        : 'Handicraft'

  const categoryPath =
    category === 'handicraft' ? 'handicrafts' : category

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Similar Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
            Explore more from {categoryLabel}
            <ArrowRight size={16} />
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:border-blue-400 dark:hover:border-blue-600">
                {/* Image */}
                <div className="relative w-full aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 flex-1">
                    {product.description}
                  </p>

                  {/* Price Range */}
                  {(product as any).minPrice && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        ₹{((product as any).minPrice as number).toLocaleString()}
                      </span>
                      <span className="text-gray-400">–</span>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        ₹{((product as any).maxPrice as number).toLocaleString()}
                      </span>
                    </div>
                  )}

                  {/* CTA */}
                  <button className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 rounded-lg transition-all duration-200 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            href={`/categories/${categoryPath}`}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

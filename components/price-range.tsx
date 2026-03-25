'use client'

import { Package } from 'lucide-react'

interface PriceRangeProps {
  minPrice: number
  maxPrice: number
  sampleMoq?: number
  mainMoq?: number
  size?: string
}

export function PriceRange({ minPrice, maxPrice, sampleMoq, mainMoq, size }: PriceRangeProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="space-y-4">
      {/* Sample Order Quantity - Highlighted Strip */}
      <div className="w-full bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center shrink-0">
            <Package className="text-blue-600 dark:text-blue-400" size={24} />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">
              Sample Order Quantity
            </p>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              {sampleMoq?.toLocaleString()}
            </p>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              {formatPrice(maxPrice)} / piece
            </p>
          </div>
        </div>
      </div>

      {/* MOQ - Secondary Strip */}
      <div className="w-full bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800 rounded-2xl px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center shrink-0">
            <Package className="text-purple-600 dark:text-purple-400" size={24} />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-1">
              MOQ (Minimum Order Quantity)
            </p>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              {mainMoq?.toLocaleString()}
            </p>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              {formatPrice(minPrice)} / piece
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { IndianRupee } from 'lucide-react'

interface PriceRangeProps {
  minPrice: number
  maxPrice: number
}

export function PriceRange({ minPrice, maxPrice }: PriceRangeProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="mb-8 space-y-3">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-full">
        <IndianRupee className="text-blue-600 dark:text-blue-400" size={16} />
        <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
          Best Export Price
        </span>
      </div>

      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
          {formatPrice(minPrice)}
        </span>
        <span className="text-xl text-gray-400 dark:text-gray-600">–</span>
        <span className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
          {formatPrice(maxPrice)}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold ml-2">/ piece</span>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
        Price varies based on order quantity and specifications • Bulk discounts available
      </p>
    </div>
  )
}

'use client'

import { Code2, Package } from 'lucide-react'

interface ProductInfoCardsProps {
  sampleMoq: number
  mainMoq: number
  hsCode: string
  size?: string
}

export function ProductInfoCards({ sampleMoq, mainMoq, hsCode, size }: ProductInfoCardsProps) {
  return (
    <div className="mb-8 space-y-4">
      {/* HS Code Strip */}
      <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm shrink-0">
              <Code2 className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-1">
                HS Code
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                {hsCode}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Size Strip */}
      {size && (
        <div className="bg-linear-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border border-orange-200 dark:border-orange-800 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm shrink-0">
                <Package className="text-orange-600 dark:text-orange-400" size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-1">
                  Size
                </p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  {size}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


'use client'

import { Package, Code2 } from 'lucide-react'

interface ProductInfoCardsProps {
  sampleMoq: number
  mainMoq: number
  hsCode: string
}

export function ProductInfoCards({ sampleMoq, mainMoq, hsCode }: ProductInfoCardsProps) {
  const cards = [
    {
      icon: Package,
      label: 'Sample Order Quantity',
      value: sampleMoq,
      unit: 'pcs/units',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: Package,
      label: 'MOQ',
      value: mainMoq,
      unit: 'pcs/units',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
    {
      icon: Code2,
      label: 'HS Code',
      value: hsCode,
      unit: '',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      isString: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <div
            key={index}
            className={`${card.bgColor} border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-default`}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex-shrink-0`}>
                  <Icon className={`${card.color}`} size={20} />
                </div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {card.label}
                </p>
              </div>

              <div>
                {/* ✅ Handle both string (HS Code) and number (MOQ) */}
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground break-all">
                  {typeof card.value === 'string'
                    ? card.value
                    : card.value?.toLocaleString()}
                </p>

                {card.unit && (
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {card.unit}
                  </p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}


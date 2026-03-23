'use client'

import { CheckCircle2, Truck, Zap, Shield } from 'lucide-react'

interface QuickStatsProps {
  columns?: 'adaptive' | '2' | '4'
}

export function QuickStats({ columns = 'adaptive' }: QuickStatsProps) {
  const stats = [
    {
      icon: Zap,
      label: 'Export Ready',
      description: 'Certified for international markets',
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    },
    {
      icon: Truck,
      label: 'Bulk Supply',
      description: 'Large quantities in stock',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: CheckCircle2,
      label: 'Fast Dispatch',
      description: '7–10 Days Delivery',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      icon: Shield,
      label: 'Quality Assured',
      description: 'ISO certified & tested',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
  ]

  const gridClass = columns === '2' ? 'grid-cols-2' : columns === '4' ? 'grid-cols-4' : 'grid-cols-2 lg:grid-cols-4'

  return (
    <div className="w-full">
      <div className={`grid ${gridClass} gap-3 md:gap-4`}>
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className={`${stat.bgColor} border border-gray-200 dark:border-gray-700 rounded-2xl p-4 md:p-5 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-300 dark:hover:border-blue-600 cursor-default group`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-2 md:p-3 bg-white dark:bg-gray-800 rounded-xl mb-2 md:mb-3 shadow-sm group-hover:shadow-md transition-all duration-200">
                  <Icon className={`${stat.color}`} size={20} />
                </div>
                <h4 className="font-semibold text-xs md:text-sm text-foreground mb-1 line-clamp-2">
                  {stat.label}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                  {stat.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

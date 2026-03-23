'use client'

import { Shield, CreditCard, CheckCircle2, Clock } from 'lucide-react'

export function OrderProtection() {
  const protectionFeatures = [
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Protected transaction processing with encryption',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assurance',
      description: 'Products verified before shipment',
    },
    {
      icon: Clock,
      title: 'On-time Delivery Support',
      description: 'Guaranteed timely shipment with tracking',
    },
  ]

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border-l-4 border-b border-r border-blue-300 dark:border-blue-800 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Decorative blur effect */}
        <div className="absolute top-0 right-0 -m-40 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

        <div className="relative z-10">
          <div className="flex items-start gap-3 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl shrink-0">
              <Shield className="text-blue-600 dark:text-blue-400" size={28} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-100">
                Order Protection
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                Your transaction is 100% secure
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {protectionFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex gap-3">
                  <div className="shrink-0 flex items-start justify-center w-6 h-6 mt-1">
                    <Icon className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-blue-900 dark:text-blue-100">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 pt-6 border-t-2 border-blue-200 dark:border-blue-800">
            <p className="text-xs md:text-sm text-blue-700 dark:text-blue-300 font-medium">
              ✓ 100% Quality Guaranteed • 24/7 Support • Hassle-free Returns
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { Shield, CreditCard, CheckCircle2, Clock, Award } from 'lucide-react'

export function TrustPanel() {
  const trustFeatures = [
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
      title: 'On-time Delivery',
      description: 'Guaranteed timely shipment with tracking',
    },
  ]

  const trustBadges = [
    { label: '50+ Global Buyers', icon: '🌍' },
    { label: 'Export Certified', icon: '✓' },
    { label: 'Fast Response', icon: '⚡' },
  ]

  return (
    <div className="w-full space-y-6">
      {/* Main Trust Card */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border-l-4 border-b border-r border-blue-300 dark:border-blue-800 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Decorative blur */}
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

          <div className="space-y-3">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex gap-3">
                  <div className="mt-1 shrink-0">
                    <Icon className="text-blue-600 dark:text-blue-400" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-blue-900 dark:text-blue-100">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-blue-800 dark:text-blue-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-3">
        {trustBadges.map((badge, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center hover:shadow-md transition-all duration-200"
          >
            <div className="text-2xl mb-2">{badge.icon}</div>
            <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 leading-tight">
              {badge.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

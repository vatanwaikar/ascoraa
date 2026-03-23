'use client'

import { Send, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

interface ProductInquiryFormProps {
  productName: string
  productId: string
}

export function ProductInquiryForm({ productName, productId }: ProductInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    orderType: 'main',
    quantity: '',
    unit: 'tons',
    message: '',
    productName,
    productId,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (submitted) {
      const successTimer = setTimeout(() => {
        setSubmitted(false)
      }, 5000)

      return () => clearTimeout(successTimer)
    }
  }, [submitted])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // Add custom message with product details
          fullMessage: `Product: ${productName}\nQuantity: ${formData.quantity} ${formData.unit}\n\nMessage:\n${formData.message}`,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send inquiry')
      }

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        orderType: 'main',
        quantity: '',
        unit: 'tons',
        message: '',
        productName,
        productId,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-green-100 dark:bg-green-950 rounded-full">
            <CheckCircle className="text-green-600 dark:text-green-400" size={64} />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-3">
          Inquiry Sent Successfully!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2 max-w-sm">
          Thank you for your interest in {productName}.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Our sales team will contact you shortly at the email address provided.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
          Company Name *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-semibold text-foreground mb-2">
          Country *
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
        >
          <option value="">Select a country</option>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="uae">United Arab Emirates</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="quantity" className="block text-sm font-semibold text-foreground mb-2">
            Quantity Required *
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
            placeholder="Enter quantity"
          />
        </div>

        <div>
          <label htmlFor="unit" className="block text-sm font-semibold text-foreground mb-2">
            Unit *
          </label>
          <select
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
          >
            <option value="tons">Tons</option>
            <option value="units">Units</option>
            <option value="pieces">Pieces</option>
            <option value="kg">Kilograms</option>
            <option value="boxes">Boxes</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="orderType" className="block text-sm font-semibold text-foreground mb-2">
            Order Type *
          </label>
          <select
            id="orderType"
            name="orderType"
            value={formData.orderType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
          >
            <option value="sample">Sample</option>
            <option value="main">Main Order</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
          Additional Requirements
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-foreground placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none"
          placeholder="Share any specific requirements or questions..."
        />
      </div>

      {/* Hidden fields for product tracking */}
      <input type="hidden" name="productName" value={formData.productName} />
      <input type="hidden" name="productId" value={formData.productId} />

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
      >
        <Send size={18} />
        {loading ? 'Sending...' : 'Send Product Inquiry'}
      </button>

      {error && (
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-100 text-sm">
          <strong>Error:</strong> {error}
        </div>
      )}
    </form>
  )
}

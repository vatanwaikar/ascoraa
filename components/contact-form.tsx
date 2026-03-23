'use client'

import { Send, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

interface ContactFormProps {
  productName?: string
  onSuccess?: () => void
}

export function ContactForm({ productName, onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    category: '',
    message: '',
    productName: productName || '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (productName) {
      setFormData((prev) => ({ ...prev, productName }))
    }
  }, [productName])

  useEffect(() => {
    if (submitted) {
      // Auto-close modal/hide success state after 5 seconds
      const successTimer = setTimeout(() => {
        if (onSuccess) {
          // If onSuccess is provided (modal case), call it to close the modal
          onSuccess()
        } else {
          // If no onSuccess (contact page case), just reset the form
          setSubmitted(false)
        }
      }, 5000)

      return () => clearTimeout(successTimer)
    }
  }, [submitted, onSuccess])

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
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        category: '',
        message: '',
        productName: productName || '',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  // Show success state instead of form
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex justify-center">
          <CheckCircle className="text-green-500" size={64} />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Inquiry Sent Successfully!
        </h3>
        <p className="text-muted-foreground mb-4 max-w-sm">
          Thank you for your interest. Our team will review your inquiry and contact you shortly at the email address provided.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
          Country
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
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

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        >
          <option value="">Select a category</option>
          <option value="agriculture">Agriculture</option>
          <option value="handicrafts">Handicrafts</option>
          <option value="automobile">Automobile Industry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
          placeholder="Tell us about your import/export needs..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={18} />
        {loading ? 'Sending...' : 'Send Inquiry'}
      </button>

      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}
    </form>
  )
}

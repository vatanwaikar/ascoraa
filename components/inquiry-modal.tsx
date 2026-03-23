'use client'

import { X } from 'lucide-react'
import { ContactForm } from './contact-form'

interface InquiryModalProps {
  isOpen: boolean
  productName: string
  onClose: () => void
}

export function InquiryModal({ isOpen, productName, onClose }: InquiryModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-2xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Product Inquiry</h2>
            <p className="text-sm text-muted-foreground mt-1">Interested in: {productName}</p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <ContactForm productName={productName} onSuccess={onClose} />
        </div>
      </div>
    </div>
  )
}

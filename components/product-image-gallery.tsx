'use client'

import { useState } from 'react'
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface ProductImageGalleryProps {
  mainImage: string
  productName: string
  thumbnails?: string[]
}

export function ProductImageGallery({ mainImage, productName, thumbnails = [] }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const allImages = [mainImage, ...thumbnails].filter(Boolean)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }

  const handlePrevImage = () => {
    const currentIndex = allImages.indexOf(selectedImage)
    const prevIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1
    setSelectedImage(allImages[prevIndex])
  }

  const handleNextImage = () => {
    const currentIndex = allImages.indexOf(selectedImage)
    const nextIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(allImages[nextIndex])
  }

  return (
    <div className="w-full">
      {/* Main Image */}
      <div
        className="relative w-full rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-300 h-full min-h-96"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <img
          src={selectedImage}
          alt={productName}
          className={`w-full h-full object-cover transition-all duration-300 cursor-zoom-in ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
          style={
            isZoomed
              ? {
                  transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                }
              : {}
          }
        />

        {/* Zoom Indicator */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2 text-white text-sm">
          <ZoomIn size={16} />
          <span className="text-xs">Hover to zoom</span>
        </div>

        {/* Image Navigation Arrows */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 backdrop-blur-sm p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-900 dark:text-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 backdrop-blur-sm p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-900 dark:text-white"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {allImages.length > 1 && (
        <div className="flex gap-3 mt-6">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                selectedImage === image
                  ? 'border-blue-500 shadow-lg'
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
              }`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {allImages.length > 1 && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
          {allImages.indexOf(selectedImage) + 1} / {allImages.length}
        </p>
      )}
    </div>
  )
}

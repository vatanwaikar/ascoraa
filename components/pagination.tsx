'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useMemo } from 'react'

interface PaginationProps {
  items: any[]
  itemsPerPage?: number
  children: (items: any[], currentPage: number, totalPages: number) => React.ReactNode
}

export function Pagination({
  items,
  itemsPerPage = 16,
  children,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const { currentItems, totalPages } = useMemo(() => {
    const total = Math.ceil(items.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const current = items.slice(startIndex, endIndex)
    
    return {
      currentItems: current,
      totalPages: total,
    }
  }, [items, itemsPerPage, currentPage])

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)

      if (currentPage > 3) {
        pages.push('...')
      }

      const startPage = Math.max(2, currentPage - 1)
      const endPage = Math.min(totalPages - 1, currentPage + 1)

      for (let i = startPage; i <= endPage; i++) {
        if (!pages.includes(i)) {
          pages.push(i)
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push('...')
      }

      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div className="w-full">
      {/* Products Grid */}
      <div>
        {children(currentItems, currentPage, totalPages)}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col items-center gap-6 mt-12 mb-8">
        {/* Info Text */}
        <p className="text-sm text-muted-foreground">
          Page <span className="font-semibold text-foreground">{currentPage}</span> of{' '}
          <span className="font-semibold text-foreground">{totalPages}</span> •{' '}
          <span className="font-semibold text-foreground">{currentItems.length}</span> of{' '}
          <span className="font-semibold text-foreground">{items.length}</span> items
        </p>

        {/* Page Numbers */}
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
          {getPageNumbers().map((page, index) => {
            if (page === '...') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-2 py-1 text-muted-foreground text-sm"
                >
                  ...
                </span>
              )
            }

            const isCurrentPage = page === currentPage
            return (
              <button
                key={page}
                onClick={() => handlePageClick(page as number)}
                className={`min-w-10 h-10 rounded-lg font-medium text-sm transition-all ${
                  isCurrentPage
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card border border-border text-foreground hover:border-primary hover:bg-accent/50 active:bg-accent'
                }`}
              >
                {page}
              </button>
            )
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 sm:gap-4 w-full sm:w-auto justify-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3 min-h-12 rounded-lg bg-card border border-border text-foreground font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary hover:bg-accent/50 active:bg-accent"
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 min-h-12 rounded-lg bg-primary text-primary-foreground font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 active:bg-primary/80"
            aria-label="Next page"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

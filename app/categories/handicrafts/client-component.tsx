'use client'

import Link from 'next/link'
import { Pagination } from '@/components/pagination'
import { Product } from '@/lib/types'

interface ClientComponentProps {
  products: Product[]
}

export function HandicraftsClientComponent({ products }: ClientComponentProps) {

  return (
    <>
      <Pagination items={products} itemsPerPage={16}>
        {(currentProducts) => (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col"
                >
                  {/* Image Placeholder */}
                  <Link href={`/products/${product.slug}`}>
                    <div className="h-48 w-full overflow-hidden cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-4 flex flex-col grow">
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2 grow">
                      {product.description}
                    </p>

                    {/* MOQ Badge */}
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100/50 text-amber-700 text-xs font-medium rounded-full">
                      MOQ: {product.moq} Pieces
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </Pagination>
    </>
  )
}

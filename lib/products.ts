import { Product, CategoryType } from './types'
import agricultureData from '@/data/agriculture.json'
import automobileData from '@/data/automobile.json'
import handicraftData from '@/data/handicraft.json'

// Export CategoryType for use in components
export type { CategoryType }

type ProductWithCategory = Product & { category: CategoryType }

const categorizedProducts: Record<CategoryType, Product[]> = {
  agriculture: agricultureData,
  automobile: automobileData,
  handicraft: handicraftData,
}

export function getAllProducts(): ProductWithCategory[] {
  const allProducts: ProductWithCategory[] = []
  
  Object.entries(categorizedProducts).forEach(([category, products]) => {
    products.forEach(product => {
      allProducts.push({
        ...product,
        category: category as CategoryType,
      })
    })
  })
  
  return allProducts
}

export function getProductsByCategory(category: CategoryType): Product[] {
  return categorizedProducts[category] || []
}

export function getProductBySlug(slug: string): ProductWithCategory | undefined {
  for (const [category, products] of Object.entries(categorizedProducts)) {
    const product = products.find(p => p.slug === slug)
    if (product) {
      return {
        ...product,
        category: category as CategoryType,
      }
    }
  }
  return undefined
}

export function getCategoryColor(category: CategoryType): string {
  const colors: Record<CategoryType, string> = {
    agriculture: 'from-green-500 to-green-600',
    automobile: 'from-blue-500 to-blue-600',
    handicraft: 'from-amber-500 to-orange-600',
  }
  return colors[category]
}

export function getCategoryLabel(category: CategoryType): string {
  const labels: Record<CategoryType, string> = {
    agriculture: 'Agriculture',
    automobile: 'Automobile',
    handicraft: 'Handicraft',
  }
  return labels[category]
}

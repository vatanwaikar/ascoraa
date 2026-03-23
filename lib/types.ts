export interface Product {
  id: string
  name: string
  slug: string
  image: string
  description: string
  sampleMoq: number
  mainMoq: number
  hsCode: string
  orderType: string
  minPrice: number
  maxPrice: number
}

export type CategoryType = 'agriculture' | 'automobile' | 'handicraft'

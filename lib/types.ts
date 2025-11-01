export interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  description: string
  features: string[]
  inStock: boolean
  rating: number
  reviews: number
}

export interface CartItem extends Product {
  quantity: number
}

export interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}
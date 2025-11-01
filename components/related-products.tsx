"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"
import type { Product } from "@/lib/products"
import { useCart } from "@/hooks/use-cart"

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const { addToCart } = useCart()

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : i < rating 
            ? "fill-yellow-200 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
  }

  if (products.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-shadow">
          <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <CardContent className="p-4">
            <div className="space-y-2">
              <Link href={`/product/${product.id}`}>
                <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
              
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
                <span className="text-xs text-muted-foreground mr-1">
                  ({product.reviews})
                </span>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <div className="text-xs text-red-600 font-medium">
                    %{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)} تخفیف
                  </div>
                )}
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1" asChild>
                  <Link href={`/product/${product.id}`}>
                    مشاهده
                  </Link>
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                >
                  سبد
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
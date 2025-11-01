"use client"

import type { Product } from "@/lib/products"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {discount > 0 && (
              <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                {discount}% تخفیف
              </Badge>
            )}
            {!product.inStock && <Badge className="absolute top-2 right-2 bg-muted text-muted-foreground">ناموجود</Badge>}
          </div>

          <div className="p-4 space-y-3">
            <div>
              <p className="text-xs text-muted-foreground">{product.category}</p>
              <h3 className="font-semibold text-foreground line-clamp-1">{product.name}</h3>
            </div>

            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">{product.price.toLocaleString("fa-IR")} تومان</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {product.originalPrice.toLocaleString("fa-IR")}
                </span>
              )}
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 ml-2" />
              افزودن به سبد خرید
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

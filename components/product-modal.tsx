"use client"

import type { Product } from "@/lib/products"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Check } from "lucide-react"
import Image from "next/image"

interface ProductModalProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductModal({ product, open, onOpenChange }: ProductModalProps) {
  if (!product) return null

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            {discount > 0 && (
              <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-base px-3 py-1">
                {discount}% تخفیف
              </Badge>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="font-semibold text-lg">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} نظر)</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">ویژگی‌های محصول:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">{product.price.toLocaleString("fa-IR")} تومان</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString("fa-IR")}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="flex-1" disabled={!product.inStock}>
                  <ShoppingCart className="ml-2 h-5 w-5" />
                  {product.inStock ? "افزودن به سبد خرید" : "ناموجود"}
                </Button>
              </div>

              {product.inStock && (
                <p className="text-sm text-accent flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  موجود در انبار
                </p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

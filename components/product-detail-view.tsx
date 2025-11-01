"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Check, Minus, Plus } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/lib/products"

interface ProductDetailViewProps {
  product: Product
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("لینک در کلیپبورد کپی شد!")
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
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

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Gallery - Future Enhancement */}
            <div className="grid grid-cols-4 gap-2">
              {/* Placeholder for additional images */}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                {product.inStock ? (
                  <Badge className="bg-green-100 text-green-800">موجود</Badge>
                ) : (
                  <Badge variant="destructive">ناموجود</Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                  <span className="text-sm text-muted-foreground mr-2">
                    ({product.reviews} نظر)
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <Badge className="bg-red-100 text-red-800">
                        %{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)} تخفیف
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleWishlist}
                      className={isWishlisted ? "text-red-500" : ""}
                    >
                      <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleShare}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quantity & Add to Cart */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">تعداد:</span>
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-4 py-2 min-w-[60px] text-center">
                        {quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    className="flex-1"
                    size="lg"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    افزودن به سبد خرید
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>ویژگی‌های محصول</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-sm">ارسال رایگان</p>
                      <p className="text-xs text-muted-foreground">برای خرید بالای 5 میلیون</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium text-sm">گارانتی اصالت</p>
                      <p className="text-xs text-muted-foreground">تضمین کیفیت محصول</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <RotateCcw className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="font-medium text-sm">ضمانت برگشت</p>
                      <p className="text-xs text-muted-foreground">7 روز فرصت بازگشت</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
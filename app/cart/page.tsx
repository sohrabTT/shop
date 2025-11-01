"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ShoppingBag, Minus, Plus, Trash2, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()

  const totalPrice = getTotalPrice()

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto" />
            <div>
              <h1 className="text-2xl font-bold mb-2">سبد خرید شما خالی است</h1>
              <p className="text-muted-foreground">محصولات مورد علاقه خود را به سبد خرید اضافه کنید</p>
            </div>
            <Link href="/">
              <Button size="lg">
                <ArrowLeft className="h-4 w-4 ml-2" />
                بازگشت به فروشگاه
              </Button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">سبد خرید</h1>
          <p className="text-muted-foreground mt-2">{items.length} محصول در سبد خرید</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="relative aspect-square w-24 h-24 overflow-hidden bg-secondary rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">
                          {item.price.toLocaleString("fa-IR")} تومان
                        </span>
                        {!item.inStock && <Badge variant="destructive">ناموجود</Badge>}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>

                        <span className="w-8 text-center font-medium">{item.quantity}</span>

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="text-sm font-medium">
                        مجموع: {(item.price * item.quantity).toLocaleString("fa-IR")} تومان
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>خلاصه سفارش</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>مجموع محصولات ({items.length}):</span>
                  <span className="font-semibold">{totalPrice.toLocaleString("fa-IR")} تومان</span>
                </div>

                <div className="flex justify-between">
                  <span>هزینه ارسال:</span>
                  <span className="font-semibold">رایگان</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>مجموع کل:</span>
                  <span className="text-primary">{totalPrice.toLocaleString("fa-IR")} تومان</span>
                </div>

                <div className="space-y-2">
                  <Link href="/checkout">
                    <Button className="w-full" size="lg">
                      تکمیل سفارش
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearCart}
                  >
                    پاک کردن سبد خرید
                  </Button>
                </div>

                <Link href="/">
                  <Button variant="ghost" className="w-full">
                    <ArrowLeft className="h-4 w-4 ml-2" />
                    ادامه خرید
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
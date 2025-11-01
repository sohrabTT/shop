"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  Truck,
  MapPin,
  User,
  Phone,
  Mail,
  CheckCircle,
  ArrowLeft,
  ShoppingBag
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState("online")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [isCompleted, setIsCompleted] = useState(false)

  const totalPrice = getTotalPrice()
  const shippingCost = shippingMethod === "express" ? 50000 : shippingMethod === "standard" ? 25000 : 0
  const finalTotal = totalPrice + shippingCost

  const handleCompleteOrder = () => {
    setIsCompleted(true)
    clearCart()
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md mx-auto">
            <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-green-600 mb-2">سفارش شما ثبت شد!</h1>
              <p className="text-muted-foreground">
                با تشکر از خرید شما. سفارش شما با موفقیت ثبت گردید و در کمترین زمان ممکن پردازش خواهد شد.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>شماره سفارش:</span>
                    <span className="font-medium">ORD-{Date.now()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>تاریخ سفارش:</span>
                    <span className="font-medium">
                      {new Date().toLocaleDateString('fa-IR')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>مبلغ کل:</span>
                    <span className="font-medium">{finalTotal.toLocaleString("fa-IR")} تومان</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                جزئیات سفارش و پیگیری مرسوله از طریق ایمیل و پیامک برای شما ارسال خواهد شد.
              </p>

              <div className="flex gap-3">
                <Button asChild>
                  <Link href="/">بازگشت به فروشگاه</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">تماس با پشتیبانی</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto" />
            <div>
              <h1 className="text-2xl font-bold mb-2">سبد خرید شما خالی است</h1>
              <p className="text-muted-foreground">ابتدا محصولاتی را به سبد خرید اضافه کنید</p>
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
          <h1 className="text-3xl font-bold">تکمیل سفارش</h1>
          <p className="text-muted-foreground mt-2">لطفاً اطلاعات ارسال و پرداخت را تکمیل کنید</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  اطلاعات مشتری
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">نام</Label>
                    <Input id="firstName" placeholder="نام خود را وارد کنید" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">نام خانوادگی</Label>
                    <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">ایمیل</Label>
                  <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" />
                </div>

                <div>
                  <Label htmlFor="phone">شماره تماس</Label>
                  <Input id="phone" placeholder="شماره تماس خود را وارد کنید" />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  آدرس ارسال
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="province">استان</Label>
                  <Input id="province" placeholder="استان" />
                </div>

                <div>
                  <Label htmlFor="city">شهر</Label>
                  <Input id="city" placeholder="شهر" />
                </div>

                <div>
                  <Label htmlFor="postalCode">کد پستی</Label>
                  <Input id="postalCode" placeholder="کد پستی ۱۰ رقمی" />
                </div>

                <div>
                  <Label htmlFor="address">آدرس کامل</Label>
                  <Textarea
                    id="address"
                    placeholder="آدرس کامل را وارد کنید"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  روش ارسال
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="free" id="free" />
                    <Label htmlFor="free" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">ارسال رایگان</div>
                          <div className="text-sm text-muted-foreground">۷-۱۰ روز کاری</div>
                        </div>
                        <div className="text-left">
                          <Badge variant="secondary">رایگان</Badge>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">ارسال عادی</div>
                          <div className="text-sm text-muted-foreground">۳-۵ روز کاری</div>
                        </div>
                        <div className="text-left">
                          <span className="text-sm">۲۵,۰۰۰ تومان</span>
                        </div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">ارسال سریع</div>
                          <div className="text-sm text-muted-foreground">۱-۲ روز کاری</div>
                        </div>
                        <div className="text-left">
                          <span className="text-sm">۵۰,۰۰۰ تومان</span>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  روش پرداخت
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="flex-1 cursor-pointer">
                      <div>
                        <div className="font-medium">پرداخت آنلاین</div>
                        <div className="text-sm text-muted-foreground">امن و سریع از طریق درگاه بانکی</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                      <div>
                        <div className="font-medium">پرداخت در محل (کارت به کارت)</div>
                        <div className="text-sm text-muted-foreground">پرداخت پس از دریافت کالا</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex-1 cursor-pointer">
                      <div>
                        <div className="font-medium">پرداخت نقدی در محل</div>
                        <div className="text-sm text-muted-foreground">پرداخت نقدی هنگام دریافت</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-2 space-x-reverse">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                    با قوانین و شرایط استفاده از فروشگاه و حریم خصوصی اطلاعات موافقم.
                    <Link href="/terms" className="text-primary hover:underline mr-1">
                      شرایط استفاده
                    </Link>
                    را مطالعه کرده‌ام.
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>خلاصه سفارش</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {items.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative aspect-square w-12 h-12 overflow-hidden bg-secondary rounded">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.quantity} × {item.price.toLocaleString("fa-IR")}</p>
                      </div>
                    </div>
                  ))}
                  {items.length > 3 && (
                    <p className="text-sm text-muted-foreground text-center">
                      و {items.length - 3} محصول دیگر...
                    </p>
                  )}
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>مجموع محصولات:</span>
                    <span>{totalPrice.toLocaleString("fa-IR")} تومان</span>
                  </div>
                  <div className="flex justify-between">
                    <span>هزینه ارسال:</span>
                    <span>{shippingCost.toLocaleString("fa-IR")} تومان</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-base">
                    <span>مجموع کل:</span>
                    <span className="text-primary">{finalTotal.toLocaleString("fa-IR")} تومان</span>
                  </div>
                </div>

                {/* Complete Order Button */}
                <Button
                  onClick={handleCompleteOrder}
                  className="w-full"
                  size="lg"
                >
                  تکمیل سفارش
                </Button>

                <Link href="/cart">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="h-4 w-4 ml-2" />
                    بازگشت به سبد خرید
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
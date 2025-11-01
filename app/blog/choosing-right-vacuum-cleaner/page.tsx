import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Home, Building2, Users } from "lucide-react"
import Link from "next/link"

export default function VacuumCleanerGuidePage() {
  const vacuumTypes = [
    {
      type: "جاروبرقی سطلی",
      suitable: "منازل بزرگ، آپارتمان‌های بزرگ",
      pros: ["قدرت مکش بالا", "ظرفیت باگ بزرگ", "مناسب برای مبلمان"],
      cons: ["حجم زیاد", "جابجایی دشوار"]
    },
    {
      type: "جاروبرقی بی‌سیم",
      suitable: "آپارتمان‌های کوچک، نظافت سریع",
      pros: ["سبک و قابل حمل", "بدون سیم", "نظافت آسان"],
      cons: ["باتری محدود", "قدرت کمتر"]
    },
    {
      type: "جاروبرقی رباتیک",
      suitable: "خانه‌های هوشمند، افراد پرمشغله",
      pros: ["نظافت خودکار", "برنامه‌ریزی زمانی", "کارایی بالا"],
      cons: ["قیمت بالا", "نگهداری پیچیده"]
    }
  ]

  const spaceGuide = [
    {
      icon: Home,
      space: "آپارتمان ۵۰-۷۰ متر",
      recommendation: "جاروبرقی بی‌سیم ۱۸-۲۲ ولت",
      price: "۵-۸ میلیون تومان"
    },
    {
      icon: Building2,
      space: "آپارتمان ۷۰-۱۲۰ متر",
      recommendation: "جاروبرقی سطلی ۱۶۰۰-۲۲۰۰ وات",
      price: "۶-۱۲ میلیون تومان"
    },
    {
      icon: Users,
      space: "خانه ویلایی +۱۲۰ متر",
      recommendation: "جاروبرقی صنعتی یا رباتیک",
      price: "۱۵-۴۰ میلیون تومان"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4" />
                بازگشت به بلاگ
              </Link>

              <Badge className="mb-4">راهنما خرید</Badge>

              <h1 className="text-4xl font-bold mb-4">
                راهنمای انتخاب جاروبرقی مناسب منزل
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                نکات مهم در انتخاب جاروبرقی بر اساس متراژ خانه، نوع کفپوش و نیازهای خانوادگی.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>علی رضایی</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>۱۴۰۳/۰۷/۲۵</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>۷ دقیقه مطالعه</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg leading-relaxed mb-8">
                  انتخاب جاروبرقی مناسب می‌تواند تفاوت زیادی در کیفیت نظافت منزل ایجاد کند.
                  اما تنوع بالای محصولات موجود در بازار، انتخاب را دشوار می‌سازد. در این راهنما
                  به بررسی عوامل مهم انتخاب جاروبرقی می‌پردازیم.
                </p>
              </div>

              {/* Space-Based Guide */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>انتخاب بر اساس متراژ منزل</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {spaceGuide.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                          <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                          <h4 className="font-semibold text-lg mb-2">{item.space}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{item.recommendation}</p>
                          <Badge variant="outline">{item.price}</Badge>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Vacuum Types Comparison */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8">انواع جاروبرقی و کاربرد آنها</h2>

                <div className="space-y-6">
                  {vacuumTypes.map((vacuum, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-2">{vacuum.type}</h4>
                            <p className="text-sm text-muted-foreground mb-4">{vacuum.suitable}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3 text-green-600">مزایا</h4>
                            <ul className="space-y-1">
                              {vacuum.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3 text-red-600">معایب</h4>
                            <ul className="space-y-1">
                              {vacuum.cons.map((con, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Floor Type Considerations */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>انتخاب بر اساس نوع کفپوش</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4 text-blue-600">مناسب برای موکت و فرش</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• قدرت مکش بالا (حداقل ۲۰۰۰ وات)</li>
                        <li>• برس‌های مخصوص فرش</li>
                        <li>• فیلتر HEPA برای آلرژی</li>
                        <li>• مخزن باگ بزرگ</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-green-600">مناسب برای سرامیک و پارکت</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• برس‌های نرم</li>
                        <li>• تنظیم قدرت مکش</li>
                        <li>• وزن سبک</li>
                        <li>• قابلیت تبدیل به جاروبرقی دستی</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Family Size Guide */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>انتخاب بر اساس تعداد اعضای خانواده</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-primary">۱-۲</div>
                      <div>
                        <h4 className="font-semibold">نفر (مجرد یا زوجین)</h4>
                        <p className="text-sm text-muted-foreground">جاروبرقی دستی یا بی‌سیم کوچک</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-primary">۳-۴</div>
                      <div>
                        <h4 className="font-semibold">نفر (خانواده کوچک)</h4>
                        <p className="text-sm text-muted-foreground">جاروبرقی با مخزن ۳-۴ لیتری</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-primary">۵+</div>
                      <div>
                        <h4 className="font-semibold">نفر (خانواده بزرگ)</h4>
                        <p className="text-sm text-muted-foreground">جاروبرقی صنعتی یا رباتیک</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Budget Guide */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>محدوده قیمت مناسب</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">اقتصادی</h4>
                      <p className="text-2xl font-bold text-green-600 mb-2">۳-۶ میلیون</p>
                      <p className="text-sm text-muted-foreground">برای نظافت معمولی</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg bg-primary/5">
                      <h4 className="font-semibold mb-2">متوسط</h4>
                      <p className="text-2xl font-bold text-blue-600 mb-2">۶-۱۵ میلیون</p>
                      <p className="text-sm text-muted-foreground">کیفیت و کارایی بالا</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">پیشرفته</h4>
                      <p className="text-2xl font-bold text-purple-600 mb-2">۱۵+ میلیون</p>
                      <p className="text-sm text-muted-foreground">فناوری‌های پیشرفته</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <div className="bg-muted/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">نکات نهایی</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  انتخاب جاروبرقی مناسب به متراژ منزل، نوع کفپوش، تعداد اعضای خانواده و بودجه شما بستگی دارد.
                  قبل از خرید، فضای منزل را اندازه‌گیری کنید و نیازهای خود را مشخص کنید. همچنین برندهای معتبر
                  مانند سامسونگ، ال‌جی و بوش را در نظر بگیرید که گارانتی و خدمات پس از فروش مناسبی ارائه می‌دهند.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">دریافت مشاوره</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/">مشاهده جاروبرقی‌ها</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
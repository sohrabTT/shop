import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Trophy, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

export default function WashingMachinesPage() {
  const washingMachines = [
    {
      brand: "سامسونگ",
      model: "WW90T554DAW",
      price: 28000000,
      capacity: "۹ کیلو",
      features: ["EcoBubble", "کلاس انرژی A+++", "۱۴ برنامه"],
      rating: 4.8,
      pros: ["صرفه‌جویی انرژی", "شستشوی عالی", "پشتیبانی خوب"],
      cons: ["قیمت نسبتاً بالا"]
    },
    {
      brand: "ال‌جی",
      model: "F2V5SYP2W",
      price: 32000000,
      capacity: "۸ کیلو",
      features: ["TurboWash", "موتور اینورتر", "کلاس انرژی A+++"],
      rating: 4.7,
      pros: ["سرعت بالا", "کیفیت ساخت", "گارانتی طولانی"],
      cons: ["صدای نسبتاً زیاد"]
    },
    {
      brand: "بوش",
      model: "WAJ2016G",
      price: 35000000,
      capacity: "۸ کیلو",
      features: ["EcoSilence", "AntiVibration", "کلاس انرژی A+++"],
      rating: 4.9,
      pros: ["آرام", "کیفیت ساخت آلمان", "دوام بالا"],
      cons: ["قیمت بالا"]
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

              <Badge className="mb-4">مقایسه محصولات</Badge>

              <h1 className="text-4xl font-bold mb-4">
                بهترین ماشین‌های لباسشویی بازار ایران
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                مقایسه بهترین برندهای ماشین لباسشویی موجود در بازار ایران از نظر کیفیت، قیمت و مصرف انرژی.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>مریم احمدی</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>۱۴۰۳/۰۸/۱۰</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>۱۲ دقیقه مطالعه</span>
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
                  بازار ماشین لباسشویی ایران بسیار متنوع است و برندهای مختلفی از ایرانی تا کره‌ای، اروپایی و چینی
                  در آن حضور دارند. در این مقاله، بهترین مدل‌های موجود در بازار را بررسی می‌کنیم.
                </p>
              </div>

              {/* Top Picks */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  انتخاب‌های برتر
                </h2>

                <div className="space-y-8">
                  {washingMachines.map((machine, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-2xl">{machine.brand} {machine.model}</CardTitle>
                            <p className="text-muted-foreground mt-2">ظرفیت: {machine.capacity}</p>
                          </div>
                          <div className="text-left">
                            <div className="text-2xl font-bold text-primary">
                              {machine.price.toLocaleString("fa-IR")} تومان
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <span className="text-sm text-muted-foreground">رتبه {index + 1}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Shield className="h-4 w-4" />
                              ویژگی‌ها
                            </h4>
                            <ul className="space-y-1">
                              {machine.features.map((feature, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                              <TrendingUp className="h-4 w-4" />
                              مزایا
                            </h4>
                            <ul className="space-y-1">
                              {machine.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                  {pro}
                                </li>
                              ))}
                            </ul>

                            {machine.cons && machine.cons.length > 0 && (
                              <div className="mt-4">
                                <h4 className="font-semibold mb-3 text-red-600">معایب</h4>
                                <ul className="space-y-1">
                                  {machine.cons.map((con, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                      {con}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t">
                          <Button className="w-full md:w-auto">
                            مشاهده محصول
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Market Analysis */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>تحلیل بازار ماشین لباسشویی ایران</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-green-600">مزایای خرید ایرانی</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• قیمت مناسب‌تر</li>
                        <li>• خدمات پس از فروش بهتر</li>
                        <li>• سازگاری با شبکه برق ایران</li>
                        <li>• گارانتی و قطعات یدکی آسان</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-blue-600">مزایای خرید خارجی</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• فناوری پیشرفته‌تر</li>
                        <li>• مصرف انرژی کمتر</li>
                        <li>• کیفیت ساخت بالاتر</li>
                        <li>• عمر مفید طولانی‌تر</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Buying Tips */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>نکات مهم خرید ماشین لباسشویی</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">۱. تعیین نیاز خانواده</h4>
                      <p className="text-muted-foreground">
                        برای خانواده‌های ۲-۳ نفره، ظرفیت ۶-۷ کیلو کافی است. برای خانواده‌های بزرگ‌تر، مدل‌های ۸-۹ کیلویی مناسب‌تر هستند.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">۲. محل قرارگیری</h4>
                      <p className="text-muted-foreground">
                        فضای کافی برای نصب و دسترسی به اتصالات برق و آب را در نظر بگیرید.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">۳. بودجه</h4>
                      <p className="text-muted-foreground">
                        مدل‌های ایرانی برای بودجه‌های متوسط و مدل‌های کره‌ای و اروپایی برای کسانی که کیفیت بالاتر می‌خواهند.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <div className="bg-muted/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">جمع‌بندی</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  انتخاب ماشین لباسشویی مناسب به نیازهای خانواده، بودجه و فضای موجود بستگی دارد.
                  اگر به دنبال بهترین کیفیت و عمر مفید بالا هستید، برندهای کره‌ای و اروپایی گزینه‌های بهتری هستند.
                  برای خرید اقتصادی‌تر، مدل‌های ایرانی نیز انتخاب مناسبی خواهند بود.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">مشاوره رایگان</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/">مشاهده محصولات</Link>
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
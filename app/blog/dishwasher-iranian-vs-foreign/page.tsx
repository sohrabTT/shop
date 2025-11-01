import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Scale } from "lucide-react"
import Link from "next/link"

export default function DishwasherComparisonPage() {
  const comparisonData = [
    {
      category: "کیفیت ساخت",
      iranian: "متوسط - خوب",
      foreign: "عالی",
      description: "برندهای خارجی معمولاً از مواد با کیفیت‌تر استفاده می‌کنند"
    },
    {
      category: "مصرف انرژی",
      iranian: "کلاس B - C",
      foreign: "کلاس A+ - A+++",
      description: "ماشین‌های اروپایی و کره‌ای مصرف انرژی بسیار کمتری دارند"
    },
    {
      category: "قابلیت شستشو",
      iranian: "8-10 برنامه",
      foreign: "12-16 برنامه",
      description: "برندهای خارجی برنامه‌های متنوع‌تری برای انواع پارچه دارند"
    },
    {
      category: "سر و صدا",
      iranian: "بالا (50-60 دسیبل)",
      foreign: "کم (40-50 دسیبل)",
      description: "برندهای خارجی معمولاً آرام‌تر کار می‌کنند"
    },
    {
      category: "گارانتی",
      iranian: "1-2 سال",
      foreign: "2-5 سال",
      description: "برندهای معتبر خارجی گارانتی طولانی‌تری ارائه می‌دهند"
    },
    {
      category: "قیمت",
      iranian: "20-40 میلیون تومان",
      foreign: "35-80 میلیون تومان",
      description: "برندهای ایرانی قیمت مناسب‌تری دارند"
    },
    {
      category: "خدمات پس از فروش",
      iranian: "خیلی خوب",
      foreign: "متوسط - خوب",
      description: "برندهای ایرانی خدمات بهتری در ایران ارائه می‌دهند"
    },
    {
      category: "قطعات یدکی",
      iranian: "آسان و ارزان",
      foreign: "نسبتاً گران",
      description: "قطعات یدکی برندهای ایرانی راحت‌تر پیدا می‌شود"
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
                مقایسه ماشین ظرفشویی ایرانی و خارجی
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                بررسی مزایا و معایب ماشین‌های ظرفشویی ساخت داخل و محصولات وارداتی از نظر کیفیت و قیمت.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>فاطمه موسوی</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>۱۴۰۳/۰۷/۳۰</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>۱۰ دقیقه مطالعه</span>
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
                  بازار ماشین ظرفشویی ایران بسیار رقابتی است و هم برندهای ایرانی و هم برندهای خارجی
                  در آن حضور دارند. هر کدام مزایا و معایب خاص خود را دارند. در این مقاله به مقایسه
                  دقیق این دو گروه می‌پردازیم.
                </p>
              </div>

              {/* Comparison Table */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-6 w-6" />
                    جدول مقایسه ماشین ظرفشویی ایرانی و خارجی
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-right p-4 font-semibold">معیار</th>
                          <th className="text-center p-4 font-semibold bg-blue-50">ایرانی</th>
                          <th className="text-center p-4 font-semibold bg-green-50">خارجی</th>
                          <th className="text-left p-4 font-semibold">توضیحات</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((item, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="p-4 font-medium">{item.category}</td>
                            <td className="p-4 text-center bg-blue-50/50">{item.iranian}</td>
                            <td className="p-4 text-center bg-green-50/50">{item.foreign}</td>
                            <td className="p-4 text-sm text-muted-foreground">{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">مزایای ماشین ظرفشویی ایرانی</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">قیمت مناسب</h4>
                        <p className="text-sm text-muted-foreground">تا ۵۰% ارزان‌تر از برندهای خارجی</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">خدمات پس از فروش عالی</h4>
                        <p className="text-sm text-muted-foreground">شبکه گسترده خدمات در سراسر کشور</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">سازگاری با شبکه برق ایران</h4>
                        <p className="text-sm text-muted-foreground">مشکل نوسانات برق کمتر</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">قطعات یدکی ارزان</h4>
                        <p className="text-sm text-muted-foreground">دسترسی آسان و قیمت مناسب</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">مزایای ماشین ظرفشویی خارجی</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">کیفیت ساخت بالا</h4>
                        <p className="text-sm text-muted-foreground">استفاده از مواد اولیه با کیفیت‌تر</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">مصرف انرژی کمتر</h4>
                        <p className="text-sm text-muted-foreground">کلاس انرژی A+ و بالاتر</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">برنامه‌های متنوع‌تر</h4>
                        <p className="text-sm text-muted-foreground">مناسب برای انواع مختلف ظرف</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">گارانتی طولانی‌تر</h4>
                          <p className="text-sm text-muted-foreground">تا ۵ سال گارانتی کامل</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Brand Recommendations */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>توصیه برندها بر اساس بودجه</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 border rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">بودجه کم (۲۰-۳۰ میلیون)</h4>
                      <p className="text-sm mb-3">برندهای ایرانی مانند پاکشوما، اسنوا</p>
                      <Badge variant="secondary">مناسب خانواده‌های کوچک</Badge>
                    </div>
                    <div className="text-center p-4 border rounded-lg bg-primary/5">
                      <h4 className="font-semibold text-lg mb-2">بودجه متوسط (۳۰-۵۰ میلیون)</h4>
                      <p className="text-sm mb-3">سامسونگ، ال‌جی، بوش</p>
                      <Badge variant="secondary">بهترین انتخاب</Badge>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">بودجه بالا (۵۰+ میلیون)</h4>
                      <p className="text-sm mb-3">زیس، میله</p>
                      <Badge variant="secondary">کیفیت حرفه‌ای</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <div className="bg-muted/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">نتیجه‌گیری</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  انتخاب بین ماشین ظرفشویی ایرانی و خارجی به نیازها و بودجه شما بستگی دارد.
                  اگر قیمت مناسب و خدمات پس از فروش خوب برایتان اولویت دارد، برندهای ایرانی انتخاب بهتری هستند.
                  اما اگر به کیفیت بالا، مصرف انرژی کمتر و فناوری پیشرفته اهمیت می‌دهید، برندهای خارجی گزینه مناسبتری خواهند بود.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">مشاوره خرید</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/">مشاهده محصولات</Link>
                  </Button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-bold mb-6">مقالات مرتبط</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">راهنمای خرید یخچال فریزر در سال ۱۴۰۳</h4>
                      <p className="text-sm text-muted-foreground">نکات مهم خرید یخچال فریزر...</p>
                      <Link href="/blog/buying-guide-refrigerator-1403" className="text-primary hover:underline text-sm mt-2 inline-block">
                        مطالعه مقاله →
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">نکاتی برای نگهداری و تعمیر ماکروویو</h4>
                      <p className="text-sm text-muted-foreground">آموزش نگهداری صحیح از ماکروویو...</p>
                      <Link href="/blog/microwave-maintenance-tips" className="text-primary hover:underline text-sm mt-2 inline-block">
                        مطالعه مقاله →
                      </Link>
                    </CardContent>
                  </Card>
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
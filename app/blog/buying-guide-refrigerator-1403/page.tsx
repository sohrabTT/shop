import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertTriangle, Star } from "lucide-react"
import Link from "next/link"

export default function RefrigeratorGuidePage() {
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
                راهنمای خرید یخچال فریزر در سال ۱۴۰۳
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                با پیشرفت تکنولوژی، انتخاب یخچال فریزر مناسب از منزل به یک چالش تبدیل شده است. در این مقاله به بررسی نکات مهم خرید یخچال فریزر می‌پردازیم.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>علی رضایی</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>۱۴۰۳/۰۸/۱۵</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>۸ دقیقه مطالعه</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg leading-relaxed mb-8">
                  یخچال فریزر به عنوان یکی از مهم‌ترین لوازم خانگی، نقش حیاتی در نگهداری مواد غذایی ایفا می‌کند.
                  با توجه به تنوع بالای محصولات موجود در بازار، انتخاب مدل مناسب می‌تواند چالش‌برانگیز باشد.
                  در این راهنما، نکات کلیدی خرید یخچال فریزر را بررسی خواهیم کرد.
                </p>
              </div>

              {/* Key Considerations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      نکات مهم خرید
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">اندازه و ظرفیت</h4>
                      <p className="text-sm text-muted-foreground">
                        ظرفیت مناسب بر اساس تعداد اعضای خانواده و عادات مصرفی
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">کلاس انرژی</h4>
                      <p className="text-sm text-muted-foreground">
                        انتخاب مدل‌های با کلاس انرژی A+ و بالاتر برای صرفه‌جویی
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">فناوری‌های نوین</h4>
                      <p className="text-sm text-muted-foreground">
                        ویژگی‌هایی مانند اینورتر، نوفراست و کنترل هوشمند
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      اشتباهات رایج
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">خرید بدون اندازه‌گیری</h4>
                      <p className="text-sm text-muted-foreground">
                        حتماً فضای قرارگیری را قبل از خرید اندازه‌گیری کنید
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">عدم توجه به گارانتی</h4>
                      <p className="text-sm text-muted-foreground">
                        شرایط گارانتی و خدمات پس از فروش را بررسی کنید
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">تمرکز صرف بر قیمت</h4>
                      <p className="text-sm text-muted-foreground">
                        کیفیت ساخت و دوام دستگاه را در نظر بگیرید
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Best Brands */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>بهترین برندهای یخچال فریزر در ایران</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <h4 className="font-semibold">سامسونگ</h4>
                      <p className="text-sm text-muted-foreground">کیفیت بالا، فناوری نوفراست</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <h4 className="font-semibold">ال‌جی</h4>
                      <p className="text-sm text-muted-foreground">فناوری Linear Compressor</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <h4 className="font-semibold">بوش</h4>
                      <p className="text-sm text-muted-foreground">کیفیت ساخت بالا، گارانتی طولانی</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Price Range */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>محدوده قیمت‌ها</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 border rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">اقتصادی</h4>
                      <p className="text-2xl font-bold text-green-600 mb-2">۲۰-۴۰ میلیون</p>
                      <p className="text-sm text-muted-foreground">برای خانواده‌های کوچک، کیفیت متوسط</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg bg-primary/5">
                      <h4 className="font-semibold text-lg mb-2">متوسط</h4>
                      <p className="text-2xl font-bold text-blue-600 mb-2">۴۰-۷۰ میلیون</p>
                      <p className="text-sm text-muted-foreground">برای خانواده‌های متوسط، بهترین انتخاب</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">لوکس</h4>
                      <p className="text-2xl font-bold text-purple-600 mb-2">۷۰+ میلیون</p>
                      <p className="text-sm text-muted-foreground">فناوری‌های پیشرفته، گارانتی طولانی</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <div className="bg-muted/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">نتیجه‌گیری</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  انتخاب یخچال فریزر مناسب نیاز به بررسی دقیق چندین عامل دارد. پیشنهاد می‌کنیم قبل از خرید،
                  فضای موجود را اندازه‌گیری کنید، نیازهای خانوادگی خود را مشخص کنید و از مشاوره کارشناسان
                  فروشگاه ما استفاده کنید. با انتخاب درست، می‌توانید سال‌ها از این دستگاه حیاتی بهره‌مند شوید.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">مشاوره رایگان</Link>
                </Button>
              </div>

              {/* Related Articles */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-bold mb-6">مقالات مرتبط</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">بهترین ماشین‌های لباسشویی بازار ایران</h4>
                      <p className="text-sm text-muted-foreground">مقایسه بهترین برندهای ماشین لباسشویی...</p>
                      <Link href="/blog/best-washing-machines-iran" className="text-primary hover:underline text-sm mt-2 inline-block">
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
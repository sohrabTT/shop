import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Wrench, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function MicrowaveMaintenancePage() {
  const maintenanceTips = [
    {
      title: "تمیز کردن منظم",
      description: "داخل ماکروویو را حداقل هفتگی تمیز کنید",
      steps: [
        "ماکروویو را خاموش کنید",
        "یک کاسه آب و لیمو داخل بگذارید",
        "به مدت ۵ دقیقه روی حداکثر قدرت قرار دهید",
        "بعد از خنک شدن، داخل را پاک کنید"
      ]
    },
    {
      title: "بررسی درب",
      description: "درب ماکروویو باید کاملاً بسته شود",
      steps: [
        "درب را بررسی کنید که ترک نداشته باشد",
        "قفل ایمنی را تست کنید",
        "اگر درب بسته نمی‌شود، از استفاده خودداری کنید"
      ]
    },
    {
      title: "نوسان ولتاژ",
      description: "از نوسانات شدید برق محافظت کنید",
      steps: [
        "از برقگیر استفاده کنید",
        "در زمان رعد و برق استفاده نکنید",
        "کابل برق را چک کنید"
      ]
    }
  ]

  const commonProblems = [
    {
      problem: "ماکروویو نمی‌چرخد",
      solution: "ترولی چرخان را بررسی کنید. ممکن است کثیف یا آسیب دیده باشد."
    },
    {
      problem: "صدا می‌دهد اما گرم نمی‌کند",
      solution: "مگنترون خراب است. نیاز به تعمیر توسط متخصص دارد."
    },
    {
      problem: "تشخیص نمی‌دهد غذا داخل است",
      description: "سنسور تشخیص غذا ممکن است کثیف باشد. داخل را کامل تمیز کنید."
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

              <Badge className="mb-4">نگهداری و تعمیر</Badge>

              <h1 className="text-4xl font-bold mb-4">
                نکاتی برای نگهداری و تعمیر ماکروویو
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                آموزش نگهداری صحیح از ماکروویو و راهکارهای حل مشکلات رایج این دستگاه پخت‌وپز.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>فاطمه موسوی</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>۱۴۰۳/۰۸/۰۵</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>۶ دقیقه مطالعه</span>
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
                  ماکروویو یکی از پرکاربردترین لوازم آشپزخانه است. با نگهداری صحیح، می‌توان عمر مفید آن را
                  افزایش داد و از خرابی‌های پیشگیرانه جلوگیری کرد. در این مقاله به نکات مهم نگهداری و تعمیر ماکروویو می‌پردازیم.
                </p>
              </div>

              {/* Maintenance Tips */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                  <Wrench className="h-8 w-8 text-blue-500" />
                  نکات نگهداری ماکروویو
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {maintenanceTips.map((tip, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{tip.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                          {tip.steps.map((step, i) => (
                            <li key={i} className="text-muted-foreground">{step}</li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Safety Warnings */}
              <Card className="mb-12 border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <AlertTriangle className="h-5 w-5" />
                    هشدارهای ایمنی
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-red-700">هرگز نکنید</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          ماکروویو خالی را روشن نکنید
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          ظروف فلزی داخل ماکروویو قرار دهید
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          درب ماکروویو را قفل نکنید
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-red-700">همیشه چک کنید</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          اتصالات برق سالم باشند
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          سطح داخلی خراش نداشته باشد
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          سیستم گردش هوا سالم باشد
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Problems */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8">مشکلات رایج و راه حل‌ها</h2>

                <div className="space-y-6">
                  {commonProblems.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <AlertTriangle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold mb-2">{item.problem}</h4>
                            <p className="text-muted-foreground">{item.solution}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Maintenance Schedule */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>برنامه نگهداری منظم</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        هفتگی
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• تمیز کردن داخل</li>
                        <li>• چک کردن درب</li>
                        <li>• پاک کردن گردوغبار بیرونی</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-600 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        ماهانه
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• تست عملکرد</li>
                        <li>• چک کردن کابل برق</li>
                        <li>• تمیز کردن فیلتر</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <div className="bg-muted/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">نکات نهایی</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  نگهداری صحیح ماکروویو نه تنها عمر دستگاه را افزایش می‌دهد، بلکه از بروز مشکلات جدی جلوگیری می‌کند.
                  در صورت مواجه شدن با مشکلات پیچیده، حتماً از تعمیرکاران متخصص کمک بگیرید و خودتان دست به تعمیر نزنید.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">درخواست تعمیر</Link>
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
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Wrench, AlertTriangle, CheckCircle, Settings } from "lucide-react"
import Link from "next/link"

export default function MaintenanceRepairGuidePage() {
  const maintenanceSchedule = [
    {
      appliance: "یخچال و فریزر",
      weekly: ["بررسی درب و لاستیک‌ها", "تمیز کردن سطح بیرونی"],
      monthly: ["یخ‌زدایی فریزر", "بررسی فیلتر"],
      annually: ["سرویس کمپرسور", "بررسی اتصالات"]
    },
    {
      appliance: "ماشین لباسشویی",
      weekly: ["تمیز کردن درب و شلنگ", "بررسی اتصالات"],
      monthly: ["تمیز کردن فیلتر", "اجرا برنامه تمیزکننده"],
      annually: ["سرویس پمپ و موتور", "بررسی تسمه‌ها"]
    },
    {
      appliance: "ماکروویو",
      weekly: ["تمیز کردن داخل", "بررسی درب"],
      monthly: ["تمیز کردن فیلتر", "بررسی صفحه نمایش"],
      annually: ["بررسی مگنترون", "سرویس کامل"]
    }
  ]

  const commonRepairs = [
    {
      problem: "یخچال گرم می‌شود",
      causes: ["گاز مبرد تمام شده", "موتور خراب", "مشکل در ترموستات"],
      solutions: ["شارژ گاز", "تعویض موتور", "تنظیم ترموستات"],
      cost: "۵۰۰,۰۰۰ - ۲,۰۰۰,۰۰۰ تومان"
    },
    {
      appliance: "ماشین لباسشویی نمی‌چرخد",
      causes: ["تسمه خراب", "مشکل در برد", "مشکل در موتور"],
      solutions: ["تعویض تسمه", "تعویض برد", "سرویس موتور"],
      cost: "۳۰۰,۰۰۰ - ۱,۵۰۰,۰۰۰ تومان"
    },
    {
      appliance: "ماکروویو صدا می‌دهد",
      causes: ["کثیف بودن داخل", "خرابی مگنترون", "مشکل در تایمر"],
      solutions: ["تمیز کردن کامل", "تعویض مگنترون", "تنظیم تایمر"],
      cost: "۲۰۰,۰۰۰ - ۸۰۰,۰۰۰ تومان"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4" />
                بازگشت به بلاگ
              </Link>

              <Badge className="mb-4 bg-blue-100 text-blue-800">راهنمای نگهداری و تعمیر</Badge>

              <h1 className="text-4xl font-bold mb-4">
                راهنمای جامع نگهداری و تعمیر لوازم خانگی: پیشگیری بهتر از درمان
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                آموزش نگهداری صحیح، تشخیص مشکلات و تعمیرات اساسی لوازم خانگی برای افزایش عمر مفید دستگاه‌ها.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>تیم فنی و تعمیراتی</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>۱۴۰۳/۰۹/۱۰</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>۲۲ دقیقه مطالعه</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Introduction */}
              <Card className="mb-12">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Wrench className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">اهمیت نگهداری منظم</h2>
                      <p className="text-muted-foreground">پیشگیری از خرابی‌ها و افزایش عمر مفید دستگاه‌ها</p>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      نگهداری منظم لوازم خانگی نه تنها عمر مفید دستگاه‌ها را افزایش می‌دهد، بلکه از خرابی‌های ناگهانی
                      جلوگیری کرده و هزینه تعمیرات را به حداقل می‌رساند. طبق آمار، ۷۰% خرابی‌های لوازم خانگی
                      می‌توان با نگهداری صحیح پیشگیری کرد.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      در این راهنمای جامع، به بررسی روش‌های نگهداری، تشخیص مشکلات رایج و راهکارهای تعمیر
                      لوازم خانگی خواهیم پرداخت. این دانش به شما کمک می‌کند تا دستگاه‌های خود را در بهترین شرایط نگه دارید.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Maintenance Schedule */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    برنامه نگهداری دوره‌ای
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {maintenanceSchedule.map((item, index) => (
                    <div key={index} className="mb-8 last:mb-0">
                      <h3 className="text-xl font-semibold mb-4 text-blue-600">{item.appliance}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2">هفتگی</h4>
                          <ul className="space-y-1 text-sm">
                            {item.weekly.map((task, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 mb-2">ماهانه</h4>
                          <ul className="space-y-1 text-sm">
                            {item.monthly.map((task, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 mb-2">سالانه</h4>
                          <ul className="space-y-1 text-sm">
                            {item.annually.map((task: string, i: number) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Common Problems */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-orange-500" />
                    مشکلات رایج و راه حل‌ها
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {commonRepairs.map((repair, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4 text-orange-600">
                          {repair.appliance}: {repair.problem}
                        </h3>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-medium mb-2 text-red-600">علل احتمالی</h4>
                            <ul className="space-y-1 text-sm">
                              {repair.causes.map((cause, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                  {cause}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2 text-green-600">راه حل‌ها</h4>
                            <ul className="space-y-1 text-sm">
                              {repair.solutions.map((solution, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                  {solution}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2 text-blue-600">هزینه تقریبی</h4>
                            <p className="text-sm font-semibold text-blue-700">{repair.cost}</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              هزینه‌ها تقریبی بوده و بسته به برند و مدل دستگاه متغیر است.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* DIY Maintenance */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-6 w-6 text-purple-500" />
                    تعمیرات ساده DIY
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        هشدار ایمنی
                      </h4>
                      <p className="text-sm text-yellow-700">
                        قبل از هرگونه تعمیر، دستگاه را از برق جدا کنید. اگر تجربه کافی ندارید، از متخصص کمک بگیرید.
                        تعمیرات نادرست می‌تواند باعث آسیب جدی شود.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-purple-600">تعمیرات ساده</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <div>
                              <strong>تعویض فیلتر ماشین لباسشویی:</strong> فیلتر را باز کرده و تمیز کنید.
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <div>
                              <strong>تمیز کردن فیلتر یخچال:</strong> فیلتر را خارج کرده و بشویید.
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <div>
                              <strong>تنظیم درب ماکروویو:</strong> پیچ‌ها را سفت کنید.
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-purple-600">چه وقت متخصص نیاز است</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <div>
                              <strong>مشکلات الکتریکی:</strong> اتصالی، جرقه، سوختگی
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <div>
                              <strong>خرابی قطعات اصلی:</strong> کمپرسور، موتور، برد الکترونیکی
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <div>
                              <strong>نوسانات شدید:</strong> لرزش، صدا، عدم عملکرد صحیح
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Warranty Information */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>راهنمای گارانتی و خدمات پس از فروش</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-blue-600">انواع گارانتی</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">گارانتی طلایی (Premium)</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• پوشش کامل قطعات</li>
                            <li>• سرویس در محل</li>
                            <li>• اولویت‌بندی تعمیر</li>
                            <li>• هزینه بالاتر</li>
                          </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">گارانتی نقره‌ای (Standard)</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• پوشش قطعات اصلی</li>
                            <li>• سرویس در فروشگاه</li>
                            <li>• تعمیر عادی</li>
                            <li>• هزینه متوسط</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-orange-600">نکات مهم گارانتی</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>نگهداری کارت گارانتی:</strong> کارت گارانتی را در جای امن نگه دارید و از دست ندهید.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>ثبت در سامانه:</strong> دستگاه خود را در سامانه گارانتی برند ثبت کنید.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>خدمات مجاز:</strong> تعمیرات را فقط توسط مراکز مجاز انجام دهید.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>گزارش خرابی:</strong> مشکلات را سریع گزارش دهید تا از پوشش گارانتی خارج نشوید.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cost Saving */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>صرفه‌جویی هزینه با نگهداری صحیح</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <div className="text-3xl font-bold text-green-600 mb-2">۶۰%</div>
                        <p className="text-sm">کاهش هزینه تعمیرات</p>
                        <p className="text-xs text-muted-foreground mt-1">با نگهداری منظم</p>
                      </div>

                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">۲ سال</div>
                        <p className="text-sm">افزایش عمر مفید</p>
                        <p className="text-xs text-muted-foreground mt-1">دستگاه‌های نگهداری شده</p>
                      </div>

                      <div className="text-center p-6 bg-purple-50 rounded-lg">
                        <div className="text-3xl font-bold text-purple-600 mb-2">۳۰%</div>
                        <p className="text-sm">صرفه‌جویی انرژی</p>
                        <p className="text-xs text-muted-foreground mt-1">با سرویس دوره‌ای</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">مثال اقتصادی</h4>
                      <p className="text-sm text-muted-foreground">
                        یک یخچال که به طور منظم سرویس می‌شود، عمر مفید آن از ۱۰ سال به ۱۵ سال می‌رسد.
                        با هزینه سالانه ۵۰۰,۰۰۰ تومان سرویس، در مجموع ۲,۵۰۰,۰۰۰ تومان صرفه‌جویی خواهید داشت.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <div className="bg-muted/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">جمع‌بندی: نگهداری کلید موفقیت</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  نگهداری صحیح لوازم خانگی نه تنها هزینه‌های شما را کاهش می‌دهد، بلکه از استرس خرابی‌های ناگهانی
                  جلوگیری می‌کند. با برنامه‌ریزی منظم و استفاده از خدمات متخصص، می‌توانید عمر مفید دستگاه‌های خود را
                  به حداکثر برسانید و از خریدهای جدید جلوگیری کنید.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">درخواست سرویس</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/">مشاهده محصولات</Link>
                  </Button>
                </div>
              </div>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>سوالات متداول</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">چه زمانی باید دستگاه را تعویض کنم؟</h4>
                      <p className="text-sm text-muted-foreground">
                        وقتی هزینه تعمیرات به بیش از ۷۰% قیمت دستگاه جدید برسد، یا دستگاه بیش از ۱۰-۱۲ سال عمر کرده باشد.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">آیا می‌توانم خودم تعمیرات ساده را انجام دهم؟</h4>
                      <p className="text-sm text-muted-foreground">
                        تعمیرات ساده مانند تمیز کردن فیلترها قابل انجام توسط خودتان است، اما تعمیرات الکتریکی و مکانیکی را به متخصص بسپارید.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">چرا نگهداری دوره‌ای مهم است؟</h4>
                      <p className="text-sm text-muted-foreground">
                        نگهداری دوره‌ای مشکلات کوچک را قبل از تبدیل شدن به خرابی‌های بزرگ شناسایی کرده و هزینه‌های تعمیر را کاهش می‌دهد.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Home, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function CompleteHomeAppliancesGuidePage() {
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

              <Badge className="mb-4">راهنمای جامع</Badge>

              <h1 className="text-4xl font-bold mb-4">
                راهنمای جامع لوازم خانگی: انتخاب، نگهداری و استفاده بهینه
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                در این راهنمای کامل، به بررسی همه جوانب لوازم خانگی از انتخاب تا نگهداری و استفاده بهینه خواهیم پرداخت.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>تیم فنی فروشگاه</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>۱۴۰۳/۰۹/۰۱</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>۲۰ دقیقه مطالعه</span>
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
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Home className="h-6 w-6 text-primary" />
                    مقدمه: اهمیت لوازم خانگی در زندگی مدرن
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      لوازم خانگی بخشی جدایی‌ناپذیر از زندگی مدرن امروزی هستند. این دستگاه‌ها نه تنها کارها را آسان‌تر می‌کنند،
                      بلکه نقش مهمی در بهبود کیفیت زندگی، صرفه‌جویی در زمان و انرژی ایفا می‌کنند. با پیشرفت تکنولوژی،
                      لوازم خانگی هوشمند و کارآمدتری وارد بازار شده‌اند که زندگی روزمره را متحول کرده‌اند.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      در این راهنمای جامع، به بررسی انواع مختلف لوازم خانگی، نکات انتخاب، روش‌های نگهداری صحیح،
                      و راهکارهای استفاده بهینه خواهیم پرداخت. هدف ما کمک به شما برای انتخاب بهترین محصولات متناسب با نیازهایتان است.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Main Categories */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8">دسته‌بندی اصلی لوازم خانگی</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-blue-500" />
                        لوازم پخت و پز
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• اجاق گاز و فر</li>
                        <li>• ماکروویو و توستر</li>
                        <li>• ماشین ظرفشویی</li>
                        <li>• مخلوط کن و غذاساز</li>
                        <li>• قهوه‌ساز و آبمیوه‌گیری</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-500" />
                        لوازم سرمایشی و گرمایشی
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• یخچال و فریزر</li>
                        <li>• کولر و پنکه</li>
                        <li>• بخاری و شوفاژ</li>
                        <li>• دستگاه تصفیه هوا</li>
                        <li>• آبگرمکن</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-purple-500" />
                        لوازم نظافت و شستشو
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• ماشین لباسشویی</li>
                        <li>• جاروبرقی</li>
                        <li>• جاروبرقی رباتیک</li>
                        <li>• اتو و بخارپز</li>
                        <li>• لوازم نظافت خانگی</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Selection Guide */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>راهنمای انتخاب لوازم خانگی</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">۱. تعیین نیازهای خانواده</h3>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-medium mb-3">سوالات کلیدی:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• تعداد اعضای خانواده چند نفر است؟</li>
                        <li>• سبک زندگی شما چگونه است؟</li>
                        <li>• فضای موجود برای دستگاه چقدر است؟</li>
                        <li>• بودجه شما برای خرید چقدر است؟</li>
                        <li>• تا چه حد به تکنولوژی اهمیت می‌دهید؟</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-600">۲. بررسی کیفیت و کارایی</h3>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-medium mb-3">فاکتورهای مهم:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• کلاس انرژی و مصرف برق</li>
                        <li>• برند و سابقه تولیدکننده</li>
                        <li>• گارانتی و خدمات پس از فروش</li>
                        <li>• کیفیت ساخت و مواد استفاده شده</li>
                        <li>• عمر مفید دستگاه</li>
                        <li>• قابلیت‌های هوشمند (IoT)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-600">۳. مقایسه قیمت و ارزش</h3>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <p className="text-sm leading-relaxed">
                        قیمت نهایی دستگاه نباید تنها معیار تصمیم‌گیری باشد. هزینه‌های جانبی مانند مصرف انرژی، تعمیر و نگهداری،
                        و ارزش بازفروش نیز باید در نظر گرفته شوند. اغلب اوقات، پرداخت هزینه بیشتر برای دستگاه با کیفیت بالاتر
                        در طولانی مدت به صرفه خواهد بود.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Maintenance Guide */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>راهنمای نگهداری و تعمیر</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-600">نگهداری روزانه</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>یخچال و فریزر:</strong> بررسی منظم درب‌ها، تمیز کردن فیلترها
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>ماشین لباسشویی:</strong> تمیز کردن درب و فیلتر آب
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>جاروبرقی:</strong> تعویض کیسه یا خالی کردن مخزن به موقع
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-red-600">تعمیر و سرویس</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>سرویس دوره‌ای:</strong> حداقل سالی یک بار توسط متخصص
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>تعویض قطعات:</strong> استفاده از قطعات اورجینال
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>گارانتی:</strong> رعایت شرایط گارانتی برای تعمیر رایگان
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Energy Saving */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                        <Zap className="h-6 w-6 text-yellow-500" />
                        راهکارهای صرفه‌جویی در مصرف انرژی
                      </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-yellow-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">یخچال و فریزر</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• دما را روی ۴ درجه سانتیگراد تنظیم کنید</li>
                          <li>• درب را سریع ببندید</li>
                          <li>• یخ‌زدایی منظم انجام دهید</li>
                          <li>• از قرار دادن غذاهای داغ خودداری کنید</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">ماشین لباسشویی</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• برنامه‌های کوتاه‌مدت استفاده کنید</li>
                          <li>• ماشین را کامل پر کنید</li>
                          <li>• از شوینده‌های مناسب استفاده کنید</li>
                          <li>• دمای آب را کاهش دهید</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">ماکروویو و اجاق</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• از اندازه مناسب ظرف استفاده کنید</li>
                          <li>• درب را کامل ببندید</li>
                          <li>• از تنظیمات مناسب زمان استفاده کنید</li>
                          <li>• نگهداری منظم انجام دهید</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">سایر دستگاه‌ها</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• دستگاه‌های غیرضروری را خاموش کنید</li>
                          <li>• از حالت Standby خودداری کنید</li>
                          <li>• تعمیرات را به موقع انجام دهید</li>
                          <li>• از دستگاه‌های کم‌مصرف استفاده کنید</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Future Trends */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>آینده لوازم خانگی: تکنولوژی‌های نوین</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-blue-600">خانه هوشمند (Smart Home)</h3>
                      <p className="text-muted-foreground">
                        دستگاه‌های متصل به اینترنت که از طریق اپلیکیشن موبایل کنترل می‌شوند. امکان برنامه‌ریزی از راه دور،
                        نظارت بر مصرف انرژی، و اتوماسیون خانگی از ویژگی‌های این دستگاه‌ها هستند.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-green-600">بازیافت و پایداری محیط زیست</h3>
                      <p className="text-muted-foreground">
                        دستگاه‌های جدید با مصرف انرژی کمتر، استفاده از مواد بازیافتی، و قابلیت تعمیر آسان طراحی می‌شوند.
                        برندهای مطرح به سمت تولید پایدار حرکت کرده‌اند.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-purple-600">هوش مصنوعی و یادگیری ماشین</h3>
                      <p className="text-muted-foreground">
                        دستگاه‌هایی که عادت‌های کاربر را یاد می‌گیرند و بر اساس آن تنظیمات خود را تغییر می‌دهند.
                        پیش‌بینی خرابی‌ها، پیشنهاد рецепت‌ها، و بهینه‌سازی مصرف انرژی از کاربردهای AI است.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Checklist */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>چک لیست خرید لوازم خانگی</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4 text-green-600">✅ نکات ضروری</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• بررسی فضای نصب دستگاه</li>
                        <li>• مطالعه شرایط گارانتی</li>
                        <li>• مقایسه قیمت در فروشگاه‌های مختلف</li>
                        <li>• بررسی نظرات کاربران</li>
                        <li>• تست دستگاه در فروشگاه</li>
                        <li>• اطمینان از وجود قطعات یدکی</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4 text-red-600">❌ اشتباهات رایج</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• خرید بدون اندازه‌گیری فضا</li>
                        <li>• تمرکز صرف بر قیمت</li>
                        <li>• نادیده گرفتن مصرف انرژی</li>
                        <li>• فراموش کردن خدمات پس از فروش</li>
                        <li>• خرید بدون بررسی کیفیت</li>
                        <li>• اعتماد به تبلیغات بیش از حد</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <div className="bg-muted/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">جمع‌بندی</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  انتخاب و نگهداری صحیح لوازم خانگی نقش مهمی در بهبود کیفیت زندگی و صرفه‌جویی در هزینه‌ها دارد.
                  با توجه به پیشرفت سریع تکنولوژی، توصیه می‌کنیم قبل از خرید تحقیقات لازم را انجام دهید و
                  از مشاوره کارشناسان معتبر استفاده کنید. همچنین نگهداری منظم و سرویس دوره‌ای دستگاه‌ها
                  عمر مفید آنها را افزایش داده و از هزینه‌های تعمیر جلوگیری می‌کند.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">دریافت مشاوره رایگان</Link>
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
                      <h4 className="font-semibold mb-2">چه مدت گارانتی برای لوازم خانگی مناسب است؟</h4>
                      <p className="text-sm text-muted-foreground">
                        حداقل ۲ سال گارانتی برای دستگاه‌های ایرانی و ۵ سال برای برندهای خارجی توصیه می‌شود.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">چگونه از دستگاه‌های خود در زمان قطع برق محافظت کنیم؟</h4>
                      <p className="text-sm text-muted-foreground">
                        استفاده از برقگیر و UPS برای دستگاه‌های حساس مانند یخچال و کامپیوتر ضروری است.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">آیا خرید لوازم خانگی چینی توصیه می‌شود؟</h4>
                      <p className="text-sm text-muted-foreground">
                        برندهای چینی معتبر مانند Xiaomi و Huawei می‌توانند گزینه مناسبی باشند، اما کیفیت ساخت آنها را بررسی کنید.
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
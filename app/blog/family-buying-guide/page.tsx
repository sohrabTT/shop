import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Users, Home, DollarSign, Heart } from "lucide-react"
import Link from "next/link"

export default function FamilyBuyingGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4" />
                بازگشت به بلاگ
              </Link>

              <Badge className="mb-4 bg-pink-100 text-pink-800">راهنمای خانواده‌ها</Badge>

              <h1 className="text-4xl font-bold mb-4">
                راهنمای خرید لوازم خانگی برای خانواده‌ها: انتخاب هوشمندانه برای زندگی راحت‌تر
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                نکات ویژه برای خانواده‌ها در انتخاب لوازم خانگی متناسب با نیازهای مختلف سنی و سلیقه‌ها.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>مشاور خانواده</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>۱۴۰۳/۰۹/۱۵</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>۱۷ دقیقه مطالعه</span>
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
                    <div className="p-3 bg-pink-100 rounded-full">
                      <Heart className="h-8 w-8 text-pink-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">خرید خانوادگی: فراتر از قیمت</h2>
                      <p className="text-muted-foreground">انتخاب دستگاه‌هایی که زندگی خانوادگی را بهبود می‌بخشند</p>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      خرید لوازم خانگی برای خانواده‌ها، تصمیم‌گیری مهمی است که تأثیر مستقیمی بر کیفیت زندگی روزمره دارد.
                      خانواده‌ها نیازهای متنوع‌تری نسبت به افراد مجرد دارند و باید دستگاه‌هایی انتخاب کنند که پاسخگوی نیازهای مختلف اعضا باشد.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      در این راهنما، به بررسی نکات ویژه خانواده‌ها در انتخاب لوازم خانگی خواهیم پرداخت و راهکارهایی برای انتخاب هوشمندانه ارائه خواهیم داد.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Family Types */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-500" />
                    انواع خانواده‌ها و نیازهای آنها
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4 text-blue-600">خانواده‌های کوچک (۲-۴ نفر)</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• یخچال فریزر ۳۰۰-۴۰۰ لیتر</li>
                          <li>• ماشین لباسشویی ۶-۸ کیلو</li>
                          <li>• ماکروویو متوسط</li>
                          <li>• ماشین ظرفشویی کوچک</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-3">
                          تمرکز روی کارایی و فضای مناسب برای آپارتمان‌های کوچک
                        </p>
                      </div>

                      <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4 text-green-600">خانواده‌های متوسط (۴-۶ نفر)</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• یخچال فریزر ۴۰۰-۶۰۰ لیتر</li>
                          <li>• ماشین لباسشویی ۸-۱۰ کیلو</li>
                          <li>• فر و ماکروویو بزرگ</li>
                          <li>• ماشین ظرفشویی ۱۲-۱۴ نفره</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-3">
                          تعادل بین ظرفیت بالا و مصرف انرژی مناسب
                        </p>
                      </div>

                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4 text-purple-600">خانواده‌های بزرگ (۶+ نفر)</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• یخچال ساید بای ساید</li>
                          <li>• ماشین لباسشویی صنعتی</li>
                          <li>• فرهای حرفه‌ای</li>
                          <li>• ماشین ظرفشویی بزرگ</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-3">
                          تمرکز روی دوام، ظرفیت بالا و سهولت استفاده
                        </p>
                      </div>

                      <div className="bg-orange-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4 text-orange-600">خانواده‌های چند نسلی</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• دستگاه‌های ساده و کاربرپسند</li>
                          <li>• کنترل‌های بزرگ و واضح</li>
                          <li>• ایمنی بالا برای سالمندان</li>
                          <li>• قابلیت تنظیم آسان</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-3">
                          راحتی استفاده برای همه سنین
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Children's Needs */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>ملاحظات ویژه برای خانواده‌های دارای فرزند</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-pink-600">ایمنی کودکان در آشپزخانه</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-3">قفل ایمنی</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• قفل درب فر و ماکروویو</li>
                            <li>• محافظ دستگیره اجاق گاز</li>
                            <li>• قفل کشوهای کمد</li>
                            <li>• محافظ گوشه‌ها و لبه‌ها</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3">طراحی کودک‌محور</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• کنترل‌های آسان برای دسترسی کودکان</li>
                            <li>• نمایشگرهای واضح و بزرگ</li>
                            <li>• صداهای هشدار دهنده</li>
                            <li>• مواد غیر سمی</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 text-yellow-700">نکات ویژه برای والدین</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• دستگاه‌های دارای سیستم خاموش خودکار</li>
                        <li>• اجاق گاز با شعله‌های ایمنی</li>
                        <li>• یخچال با قفل کودک</li>
                        <li>• ماشین ظرفشویی با برنامه‌های کوتاه</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Budget Planning */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-green-500" />
                    برنامه‌ریزی بودجه خانوادگی
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-600">استراتژی‌های خرید هوشمند</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-3">خرید مرحله‌ای</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• اول: یخچال و اجاق گاز</li>
                            <li>• دوم: ماشین لباسشویی</li>
                            <li>• سوم: ماشین ظرفشویی</li>
                            <li>• چهارم: دستگاه‌های جانبی</li>
                          </ul>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-3">پس‌انداز انرژی</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• انتخاب کلاس انرژی A+</li>
                            <li>• استفاده از برنامه‌های Eco</li>
                            <li>• نگهداری منظم دستگاه‌ها</li>
                            <li>• خاموش کردن Standby</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-600">محاسبه بازگشت سرمایه</h3>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-medium mb-3">مثال: خرید ماشین ظرفشویی</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p>هزینه خرید: <strong>۴۰ میلیون تومان</strong></p>
                            <p>صرفه‌جویی ماهانه: <strong>۳۰۰ هزار تومان</strong></p>
                          </div>
                          <div>
                            <p>بازگشت سرمایه: <strong>۱۱ ماه</strong></p>
                            <p>طول عمر مفید: <strong>۱۰ سال</strong></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lifestyle Considerations */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>ملاحظات سبک زندگی خانوادگی</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-600">سبک زندگی مدرن</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-3">خانواده‌های پرمشغله</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• دستگاه‌های سریع و خودکار</li>
                            <li>• برنامه‌ریزی زمانی</li>
                            <li>• کنترل از راه دور</li>
                            <li>• نظافت آسان</li>
                          </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-3">خانواده‌های سنتی</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• دستگاه‌های ساده و آشنا</li>
                            <li>• کنترل‌های مکانیکی</li>
                            <li>• دوام و استحکام بالا</li>
                            <li>• تعمیر آسان</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-purple-600">ترجیحات غذایی</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-purple-50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-3">خانواده‌های ایرانی</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• فرهای بزرگ و توانمند</li>
                            <li>• اجاق گاز با شعله‌های قوی</li>
                            <li>• یخچال مناسب برای نگهداری سبزیجات</li>
                            <li>• ماشین ظرفشویی مقاوم</li>
                          </ul>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-3">خانواده‌های بین‌المللی</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• ماکروویو پیشرفته</li>
                            <li>• فرهای چند منظوره</li>
                            <li>• دستگاه‌های تخصصی (همزن، آبمیوه‌گیری)</li>
                            <li>• یخچال با فریزر مناسب</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Space Planning */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-6 w-6 text-orange-500" />
                    برنامه‌ریزی فضای خانه
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-orange-600">بهینه‌سازی فضای آشپزخانه</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-3">آشپزخانه‌های کوچک</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• دستگاه‌های جمع‌وجور</li>
                            <li>• نصب دیواری</li>
                            <li>• چند کارکردی</li>
                            <li>• قابلیت جابجایی</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3">آشپزخانه‌های بزرگ</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• دستگاه‌های بزرگ و حرفه‌ای</li>
                            <li>• چندین دستگاه تخصصی</li>
                            <li>• فضای ذخیره‌سازی اضافی</li>
                            <li>• طراحی زیبا و مدرن</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">نکات طراحی</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• رعایت مثلث کار (یخچال - سینک - اجاق گاز)</li>
                        <li>• دسترسی آسان به دستگاه‌های پر استفاده</li>
                        <li>• ایمنی کودکان در طراحی</li>
                        <li>• تهویه مناسب برای دستگاه‌های حرارتی</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Future Planning */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>برنامه‌ریزی برای آینده</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-indigo-600">افزایش تعداد اعضای خانواده</h3>
                      <div className="bg-indigo-50 p-6 rounded-lg">
                        <h4 className="font-medium mb-3">انتخاب دستگاه‌های مقیاس‌پذیر</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• یخچال با امکان ارتقای ظرفیت</li>
                          <li>• ماشین لباسشویی با برنامه‌های انعطاف‌پذیر</li>
                          <li>• دستگاه‌های با قطعات قابل تعویض</li>
                          <li>• گارانتی طولانی‌مدت</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-indigo-600">آماده‌سازی برای سالمندی والدین</h3>
                      <div className="bg-indigo-50 p-6 rounded-lg">
                        <h4 className="font-medium mb-3">دستگاه‌های مناسب سالمندان</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• کنترل‌های بزرگ و واضح</li>
                          <li>• نمایشگرهای دیجیتال ساده</li>
                          <li>• قابلیت تنظیم ارتفاع</li>
                          <li>• ایمنی بالا و سیستم‌های هشدار</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Family Checklist */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>چک لیست نهایی خانواده‌ها</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-600">✅ نکات ضروری</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>اندازه‌گیری فضا:</strong> قبل از خرید، فضای قرارگیری را اندازه‌گیری کنید
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>بررسی نیازها:</strong> سلیقه‌ها و عادات غذایی خانواده را در نظر بگیرید
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>ایمنی کودکان:</strong> دستگاه‌های دارای سیستم ایمنی انتخاب کنید
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>هزینه نگهداری:</strong> هزینه قطعات یدکی و تعمیر را بررسی کنید
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-red-600">❌ اشتباهات رایج</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>خرید بدون برنامه:</strong> بدون توجه به نیازهای واقعی خانواده
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>تمرکز صرف بر برند:</strong> بدون بررسی کیفیت و کارایی واقعی
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>نادیده گرفتن آینده:</strong> بدون فکر کردن به تغییرات آتی خانواده
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>فراموش کردن فضای نصب:</strong> بدون اندازه‌گیری دقیق محل قرارگیری
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <div className="bg-muted/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">انتخابی که زندگی خانوادگی شما را آسان‌تر می‌کند</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  خرید لوازم خانگی برای خانواده‌ها، فراتر از یک تصمیم مالی ساده است. این انتخاب‌ها تأثیر مستقیمی بر کیفیت زندگی روزمره،
                  راحتی خانواده و حتی روابط خانوادگی دارند. با توجه به نیازهای منحصر به فرد خانواده خود و برنامه‌ریزی مناسب،
                  می‌توانید دستگاه‌هایی انتخاب کنید که سال‌ها به شما خدمت کنند و زندگی را برای همه اعضای خانواده آسان‌تر سازند.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">مشاوره خانوادگی رایگان</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/">مشاهده محصولات خانوادگی</Link>
                  </Button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-bold mb-6">مقالات مرتبط برای خانواده‌ها</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">راهنمای جامع لوازم خانگی</h4>
                      <p className="text-sm text-muted-foreground">انتخاب، نگهداری و استفاده بهینه از همه دستگاه‌ها...</p>
                      <Link href="/blog/complete-home-appliances-guide" className="text-primary hover:underline text-sm mt-2 inline-block">
                        مطالعه مقاله →
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">راهکارهای صرفه‌جویی انرژی</h4>
                      <p className="text-sm text-muted-foreground">کاهش ۵۰ درصدی قبض برق با تکنیک‌های ساده...</p>
                      <Link href="/blog/energy-saving-home-appliances" className="text-primary hover:underline text-sm mt-2 inline-block">
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
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Zap, TrendingDown, DollarSign, Leaf } from "lucide-react"
import Link from "next/link"

export default function EnergySavingGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4" />
                بازگشت به بلاگ
              </Link>

              <Badge className="mb-4 bg-green-100 text-green-800">راهکارهای صرفه‌جویی</Badge>

              <h1 className="text-4xl font-bold mb-4">
                راهکارهای صرفه‌جویی انرژی در لوازم خانگی: کاهش قبض برق تا ۵۰%
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                با استفاده از تکنیک‌های ساده و هوشمندانه، می‌توانید مصرف انرژی لوازم خانگی خود را به طور چشمگیری کاهش دهید.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>کارشناس انرژی</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>۱۴۰۳/۰۹/۰۵</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>۱۸ دقیقه مطالعه</span>
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
                    <div className="p-3 bg-green-100 rounded-full">
                      <Zap className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">چرا صرفه‌جویی انرژی مهم است؟</h2>
                      <p className="text-muted-foreground">ذخیره‌سازی انرژی برای آینده کره زمین و کاهش هزینه‌های زندگی</p>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      مصرف انرژی در لوازم خانگی بخش مهمی از قبض ماهانه برق خانواده‌ها را تشکیل می‌دهد.
                      طبق آمار، لوازم خانگی حدود ۲۰-۳۰ درصد از مصرف انرژی خانوارها را به خود اختصاص می‌دهند.
                      با استفاده از تکنیک‌های ساده و کاربردی، می‌توان این مصرف را تا ۵۰ درصد کاهش داد.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      در این مقاله، به بررسی راهکارهای عملی و علمی برای کاهش مصرف انرژی در انواع لوازم خانگی خواهیم پرداخت.
                      این راهکارها نه تنها به کاهش هزینه‌های شما کمک می‌کنند، بلکه نقش مهمی در حفظ محیط زیست دارند.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <TrendingDown className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-green-600 mb-2">۵۰%</div>
                    <p className="text-sm text-muted-foreground">کاهش مصرف انرژی</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <DollarSign className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">۲M</div>
                    <p className="text-sm text-muted-foreground">تومان صرفه‌جویی سالانه</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-green-600 mb-2">۲۵۰kg</div>
                    <p className="text-sm text-muted-foreground">کاهش انتشار CO2</p>
                  </CardContent>
                </Card>
              </div>

              {/* Refrigerator Section */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      ❄️
                    </div>
                    یخچال و فریزر: بزرگترین مصرف‌کننده انرژی
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-600">راهکارهای صرفه‌جویی</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>تنظیم دما:</strong> دمای یخچال روی ۴ درجه سانتیگراد و فریزر روی -۱۸ درجه
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>یخ‌زدایی منظم:</strong> هر ۶ ماه یک بار برای جلوگیری از مصرف انرژی اضافی
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>محل قرارگیری:</strong> دور از اجاق گاز، رادیاتور و نور مستقیم خورشید
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>درب را سریع ببندید:</strong> از باز ماندن درب برای مدت طولانی خودداری کنید
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">نکته ویژه</h3>
                      <p className="text-muted-foreground mb-4">
                        یخچال‌های قدیمی حدود ۴۰-۵۰ درصد بیشتر از مدل‌های جدید انرژی مصرف می‌کنند.
                        اگر یخچال شما بیش از ۱۰ سال عمر دارد، زمان تعویض آن فرا رسیده است.
                      </p>
                      <div className="bg-white p-4 rounded border">
                        <p className="text-sm">
                          <strong>صرفه‌جویی:</strong> با تنظیم صحیح دما می‌توانید تا ۱۵% در مصرف انرژی صرفه‌جویی کنید.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Washing Machine */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      🧺
                    </div>
                    ماشین لباسشویی: بهینه‌سازی مصرف آب و برق
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3 text-cyan-600">روش‌های شستشو</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• استفاده از برنامه‌های کوتاه‌مدت (۳۰ درجه)</li>
                          <li>• شستشوی کامل ماشین (نه نیمه)</li>
                          <li>• استفاده از مواد شوینده مناسب دما</li>
                          <li>• شستشوی لباس‌های تیره در دمای کمتر</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3 text-cyan-600">نگهداری دستگاه</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• تمیز کردن فیلتر ماشین هر ۳ ماه</li>
                          <li>• استفاده از برقگیر برای نوسانات</li>
                          <li>• سرویس دوره‌ای توسط متخصص</li>
                          <li>• عدم استفاده از ماشین در ساعات پیک</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-cyan-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-2">برنامه شستشوی بهینه</h4>
                      <p className="text-sm text-muted-foreground">
                        برای خانواده ۴ نفره، استفاده از برنامه ۴۰ درجه سانتیگراد با ماشین کامل بهتر از
                        دو برنامه ۶۰ درجه با ماشین نیمه است. این روش ۳۰% کمتر انرژی مصرف می‌کند.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Kitchen Appliances */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      🍳
                    </div>
                    لوازم آشپزخانه: ماکروویو، اجاق گاز و فر
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-orange-600">ماکروویو</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-sm">
                          <li>• استفاده از ظرف مناسب اندازه غذا</li>
                          <li>• اجتناب از گرم کردن با دمای بالا</li>
                          <li>• استفاده از حالت Defrost برای ذوب</li>
                          <li>• خاموش کردن دستگاه در صورت عدم استفاده</li>
                        </ul>
                        <div className="bg-orange-50 p-4 rounded">
                          <p className="text-sm">
                            <strong>نکته:</strong> گرم کردن یک لیوان آب در ماکروویو ۱۰۰ برابر کارآمدتر از جوشاندن روی گاز است.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-orange-600">اجاق گاز و فر</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-sm">
                          <li>• استفاده از شعله مناسب اندازه قابلمه</li>
                          <li>• پوشش قابلمه‌ها برای حفظ حرارت</li>
                          <li>• استفاده از فر به جای گاز برای پخت گروهی</li>
                          <li>• پیش‌گرم کردن اجسام در فر</li>
                        </ul>
                        <div className="bg-orange-50 p-4 rounded">
                          <p className="text-sm">
                            <strong>صرفه‌جویی:</strong> با پوشش قابلمه‌ها تا ۷۰% انرژی ذخیره می‌شود.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Standby Power */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-red-500" />
                    مصرف برق Standby: دشمن پنهان انرژی
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      دستگاه‌های الکترونیکی حتی وقتی خاموش هستند، انرژی مصرف می‌کنند. این مصرف که به "Standby Power" معروف است،
                      سالانه حدود ۱۰-۱۵ درصد از قبض برق شما را تشکیل می‌دهد.
                    </p>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 text-red-700">راهکارهای کاهش مصرف Standby</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• استفاده از پریزهای هوشمند با تایمر</li>
                        <li>• خاموش کردن کامل دستگاه‌های غیرضروری</li>
                        <li>• استفاده از چندراهه‌های با کلید خاموش</li>
                        <li>• تنظیم دستگاه‌ها روی حالت Eco</li>
                        <li>• قطع برق تلویزیون، گیرنده و کنسول بازی</li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-100 rounded">
                        <div className="text-2xl font-bold">۵ وات</div>
                        <p className="text-sm">تلویزیون در حالت Standby</p>
                      </div>
                      <div className="text-center p-4 bg-gray-100 rounded">
                        <div className="text-2xl font-bold">۲ وات</div>
                        <p className="text-sm">گیرنده دیجیتال</p>
                      </div>
                      <div className="text-center p-4 bg-gray-100 rounded">
                        <div className="text-2xl font-bold">۱ وات</div>
                        <p className="text-sm">شارژر موبایل</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Smart Appliances */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>لوازم خانگی هوشمند: آینده صرفه‌جویی</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-purple-600">مزایای لوازم هوشمند</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>کنترل از راه دور:</strong> مدیریت دستگاه‌ها از طریق اپلیکیشن موبایل
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>برنامه‌ریزی هوشمند:</strong> کار در ساعات غیرپیک مصرف انرژی
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <strong>نظارت مصرف:</strong> گزارش دقیق مصرف انرژی هر دستگاه
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">نمونه‌هایی از صرفه‌جویی</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>یخچال هوشمند:</span>
                          <span className="font-medium">۲۰-۳۰% کاهش مصرف</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ماشین لباسشویی هوشمند:</span>
                          <span className="font-medium">۱۵-۲۵% کاهش مصرف</span>
                        </div>
                        <div className="flex justify-between">
                          <span>سیستم گرمایشی هوشمند:</span>
                          <span className="font-medium">۴۰-۵۰% کاهش مصرف</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Plan */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle>برنامه عملی ۳۰ روزه صرفه‌جویی انرژی</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 border rounded-lg text-center">
                        <div className="text-lg font-bold text-blue-600 mb-2">هفته ۱</div>
                        <p className="text-sm">بررسی و تنظیم دمای دستگاه‌ها</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <div className="text-lg font-bold text-green-600 mb-2">هفته ۲</div>
                        <p className="text-sm">بهینه‌سازی عادات مصرف</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <div className="text-lg font-bold text-orange-600 mb-2">هفته ۳</div>
                        <p className="text-sm">نگهداری و سرویس دستگاه‌ها</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <div className="text-lg font-bold text-purple-600 mb-2">هفته ۴</div>
                        <p className="text-sm">نظارت و اندازه‌گیری نتایج</p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg mt-6">
                      <h4 className="font-semibold mb-3">انتظار می‌رود:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• کاهش ۲۰-۳۰ درصدی مصرف انرژی</li>
                        <li>• صرفه‌جویی ماهانه ۵۰۰,۰۰۰ تا ۱,۰۰۰,۰۰۰ تومان</li>
                        <li>• کاهش انتشار CO2 معادل ۲۰۰ کیلوگرم در سال</li>
                        <li>• افزایش عمر مفید دستگاه‌ها</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <div className="bg-muted/30 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">نتیجه‌گیری و پیشنهاد نهایی</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  صرفه‌جویی انرژی نه تنها هزینه‌های شما را کاهش می‌دهد، بلکه نقش مهمی در حفظ محیط زیست دارد.
                  با اعمال تغییرات ساده در عادات روزانه، می‌توانید تا ۵۰% در مصرف انرژی لوازم خانگی صرفه‌جویی کنید.
                  شروع با تغییرات کوچک و سپس حرکت به سمت فناوری‌های هوشمند، بهترین استراتژی است.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">مشاوره رایگان انرژی</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/">مشاهده محصولات کم‌مصرف</Link>
                  </Button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-bold mb-6">مقالات مرتبط</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">راهنمای جامع لوازم خانگی</h4>
                      <p className="text-sm text-muted-foreground">انتخاب، نگهداری و استفاده بهینه از لوازم خانگی...</p>
                      <Link href="/blog/complete-home-appliances-guide" className="text-primary hover:underline text-sm mt-2 inline-block">
                        مطالعه مقاله →
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">نگهداری و تعمیر لوازم خانگی</h4>
                      <p className="text-sm text-muted-foreground">آموزش نگهداری صحیح و تعمیرات اساسی...</p>
                      <Link href="/blog/maintenance-repair-guide" className="text-primary hover:underline text-sm mt-2 inline-block">
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
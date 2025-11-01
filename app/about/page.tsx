import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Shield, Truck } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">درباره ما</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                فروشگاه لوازم خانگی با بیش از ۱۰ سال سابقه در ارائه بهترین محصولات با کیفیت و قیمت مناسب
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">داستان ما</h2>
              <div className="prose prose-lg mx-auto text-center">
                <p className="mb-6">
                  فروشگاه لوازم خانگی ما در سال ۱۳۹۳ با هدف ارائه محصولات با کیفیت و خدمات مشتری‌مداری راه‌اندازی شد.
                  از آن زمان تاکنون، با تکیه بر تیم متخصص و تجربه فراوان، توانسته‌ایم جایگاه ویژه‌ای در بازار لوازم خانگی کشور کسب کنیم.
                </p>
                <p className="mb-6">
                  ما معتقدیم که هر خانوده‌ای حق دارد از بهترین لوازم خانگی با قیمت مناسب بهره‌مند شود.
                  به همین دلیل، همواره در تلاش هستیم تا جدیدترین و بهترین محصولات را از برندهای معتبر جهانی به مشتریان عزیز ارائه دهیم.
                </p>
                <p>
                  با بیش از ۱۰۰ هزار مشتری راضی و ارائه خدمات در سراسر کشور، فروشگاه ما به عنوان یکی از معتبرترین فروشگاه‌های
                  آنلاین لوازم خانگی شناخته می‌شود.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">چرا ما را انتخاب کنید؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>کیفیت تضمینی</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    تمامی محصولات ما دارای گارانتی معتبر و کیفیت بالا هستند
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>پشتیبانی ۲۴ ساعته</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    تیم پشتیبانی ما در تمامی ساعات روز آماده کمک به شماست
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>تحویل امن</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    بسته‌بندی و ارسال محصولات با بالاترین استانداردهای ایمنی
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>ارسال سریع</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    تحویل در کمترین زمان ممکن در تهران و شهرستان‌ها
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">۱۰+</div>
                <div className="text-muted-foreground">سال تجربه</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">۱۰۰K+</div>
                <div className="text-muted-foreground">مشتری راضی</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">۱۰۰۰+</div>
                <div className="text-muted-foreground">محصول</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">۴.۹/۵</div>
                <div className="text-muted-foreground">رضایت مشتریان</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
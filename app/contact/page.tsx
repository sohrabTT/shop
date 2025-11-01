import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">تماس با ما</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                در صورت داشتن هرگونه سوال یا نیاز به راهنمایی، با ما در تماس باشید
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">اطلاعات تماس</h2>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">تلفن تماس</h3>
                          <p className="text-muted-foreground mb-1">۰۲۱-۱۲۳۴۵۶۷۸</p>
                          <p className="text-muted-foreground">۰۹۲۱۱۶۸۲۲۶۴</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">ایمیل</h3>
                          <p className="text-muted-foreground">info@homeappliances.ir</p>
                          <p className="text-muted-foreground">support@homeappliances.ir</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">آدرس</h3>
                          <p className="text-muted-foreground">
                            تهران، خیابان ولیعصر، پلاک ۱۲۳، طبقه ۴
                          </p>
                          <p className="text-muted-foreground">
                            کد پستی: ۱۹۱۹۶۳۴۵۶۷
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">ساعات کاری</h3>
                          <p className="text-muted-foreground">شنبه تا پنج‌شنبه: ۹ صبح تا ۶ عصر</p>
                          <p className="text-muted-foreground">پشتیبانی آنلاین: ۲۴ ساعته</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">فرم تماس</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">نام</Label>
                        <Input id="firstName" placeholder="نام خود را وارد کنید" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">نام خانوادگی</Label>
                        <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">ایمیل</Label>
                      <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" />
                    </div>

                    <div>
                      <Label htmlFor="phone">شماره تماس</Label>
                      <Input id="phone" placeholder="شماره تماس خود را وارد کنید" />
                    </div>

                    <div>
                      <Label htmlFor="subject">موضوع</Label>
                      <Input id="subject" placeholder="موضوع پیام خود را وارد کنید" />
                    </div>

                    <div>
                      <Label htmlFor="message">پیام</Label>
                      <Textarea
                        id="message"
                        placeholder="پیام خود را بنویسید..."
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button className="w-full" size="lg">
                      <Send className="h-4 w-4 ml-2" />
                      ارسال پیام
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">موقعیت ما روی نقشه</h2>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <p className="text-muted-foreground">نقشه موقعیت فروشگاه در اینجا نمایش داده خواهد شد</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
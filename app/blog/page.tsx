import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "راهنمای خرید یخچال فریزر در سال ۱۴۰۳",
    excerpt: "با پیشرفت تکنولوژی، انتخاب یخچال فریزر مناسب از منزل به یک چالش تبدیل شده است. در این مقاله به بررسی نکات مهم خرید یخچال فریزر می‌پردازیم.",
    author: "علی رضایی",
    date: "۱۴۰۳/۰۸/۱۵",
    readTime: "۸ دقیقه",
    category: "راهنما خرید",
    image: "/images/product_1.jpg",
    slug: "buying-guide-refrigerator-1403"
  },
  {
    id: 2,
    title: "بهترین ماشین‌های لباسشویی بازار ایران",
    excerpt: "مقایسه بهترین برندهای ماشین لباسشویی موجود در بازار ایران از نظر کیفیت، قیمت و مصرف انرژی.",
    author: "مریم احمدی",
    date: "۱۴۰۳/۰۸/۱۰",
    readTime: "۱۲ دقیقه",
    category: "مقایسه محصولات",
    image: "/images/product_2.jpg",
    slug: "best-washing-machines-iran"
  },
  {
    id: 3,
    title: "نکاتی برای نگهداری و تعمیر ماکروویو",
    excerpt: "آموزش نگهداری صحیح از ماکروویو و راهکارهای حل مشکلات رایج این دستگاه پخت‌وپز.",
    author: "احمد کریمی",
    date: "۱۴۰۳/۰۸/۰۵",
    readTime: "۶ دقیقه",
    category: "نگهداری و تعمیر",
    image: "/images/product_3.jpg",
    slug: "microwave-maintenance-tips"
  },
  {
    id: 4,
    title: "مقایسه ماشین ظرفشویی ایرانی و خارجی",
    excerpt: "بررسی مزایا و معایب ماشین‌های ظرفشویی ساخت داخل و محصولات وارداتی از نظر کیفیت و قیمت.",
    author: "فاطمه موسوی",
    date: "۱۴۰۳/۰۷/۳۰",
    readTime: "۱۰ دقیقه",
    category: "مقایسه محصولات",
    image: "/images/product_4.jpg",
    slug: "dishwasher-iranian-vs-foreign"
  },
  {
    id: 5,
    title: "راهنمای انتخاب جاروبرقی مناسب منزل",
    excerpt: "نکات مهم در انتخاب جاروبرقی بر اساس متراژ خانه، نوع کفپوش و نیازهای خانوادگی.",
    author: "علی رضایی",
    date: "۱۴۰۳/۰۷/۲۵",
    readTime: "۷ دقیقه",
    category: "راهنما خرید",
    image: "/images/product_5.jpg",
    slug: "choosing-right-vacuum-cleaner"
  },
  {
    id: 6,
    title: "راهنمای کامل خرید لوازم خانگی",
    excerpt: "راهنمای جامع برای خرید لوازم خانگی، از انتخاب تا نگهداری و تعمیر، شامل نکات کلیدی برای هر دسته از لوازم خانگی.",
    author: "تیم تحریریه",
    date: "۱۴۰۳/۰۸/۲۰",
    readTime: "۱۵ دقیقه",
    category: "راهنمای خرید",
    image: "/images/product_6.jpg",
    slug: "complete-home-appliance-guide"
  },
  {
    id: 7,
    title: "راهکارهای صرفه‌جویی در مصرف انرژی لوازم خانگی",
    excerpt: "نکات عملی برای کاهش مصرف انرژی لوازم خانگی و کمک به محیط زیست و کاهش هزینه‌های برق.",
    author: "تیم تحریریه",
    date: "۱۴۰۳/۰۸/۱۸",
    readTime: "۱۲ دقیقه",
    category: "صرفه‌جویی انرژی",
    image: "/images/product_7.jpg",
    slug: "energy-saving-tips"
  },
  {
    id: 8,
    title: "راهنمای نگهداری و تعمیر لوازم خانگی",
    excerpt: "آموزش نگهداری منظم و روش‌های تشخیص و رفع مشکلات رایج لوازم خانگی برای افزایش عمر مفید آن‌ها.",
    author: "تیم تحریریه",
    date: "۱۴۰۳/۰۸/۱۶",
    readTime: "۱۰ دقیقه",
    category: "نگهداری و تعمیر",
    image: "/images/product_8.jpg",
    slug: "maintenance-repair-guide"
  },
  {
    id: 9,
    title: "آخرین تکنولوژی‌های روز دنیا در لوازم خانگی",
    excerpt: "بررسی آخرین پیشرفت‌های تکنولوژیکی در لوازم خانگی و ویژگی‌های نوآورانه‌ی آن‌ها برای بهبود کیفیت زندگی.",
    author: "تیم تحریریه",
    date: "۱۴۰۳/۰۸/۱۳",
    readTime: "۱۳ دقیقه",
    category: "تکنولوژی",
    image: "/images/product_9.jpg",
    slug: "latest-technology-trends"
  },
  {
    id: 10,
    title: "راهنمای خرید لوازم خانگی برای خانواده‌ها",
    excerpt: "راهنمای تخصصی برای خانواده‌ها برای انتخاب لوازم خانگی مناسب با توجه به نیازهای خاص هر خانواده.",
    author: "تیم تحریریه",
    date: "۱۴۰۳/۰۸/۱۱",
    readTime: "۱۴ دقیقه",
    category: "راهنمای خانواده",
    image: "/images/product_10.jpg",
    slug: "family-buying-guide"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">بلاگ لوازم خانگی</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                مقالات تخصصی در مورد انتخاب، نگهداری و تعمیر لوازم خانگی
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <span className="text-muted-foreground">تصویر مقاله</span>
                      </div>
                    )}
                    <Badge className="absolute top-4 right-4">
                      {post.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        مطالعه مقاله
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">سوالی در مورد لوازم خانگی دارید؟</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                کارشناسان ما آماده پاسخگویی به سوالات شما در مورد انتخاب، نصب و نگهداری لوازم خانگی هستند.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">تماس با ما</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/">مشاهده محصولات</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
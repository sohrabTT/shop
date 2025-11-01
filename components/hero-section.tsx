import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-primary/20 via-background to-background border-b border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            بهترین لوازم خانگی
            <span className="text-primary"> با قیمت مناسب</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
            مجموعه کاملی از لوازم خانگی با کیفیت برتر و گارانتی معتبر. خرید آسان، ارسال سریع و پشتیبانی ۲۴ ساعته.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="text-lg">
              مشاهده محصولات
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent">
              تماس با ما
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 h-full w-1/2 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-primary to-transparent" />
      </div>
    </section>
  )
}

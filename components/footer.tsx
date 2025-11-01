import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">درباره ما</h3>
            <p className="text-muted-foreground leading-relaxed">
              فروشگاه لوازم خانگی با بیش از 10 سال سابقه، ارائه‌دهنده بهترین محصولات با کیفیت و قیمت مناسب است.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">دسترسی سریع</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">محصولات</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">درباره ما</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">تماس با ما</Link></li>
              <li className="hover:text-primary cursor-pointer transition-colors">قوانین و مقررات</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">تماس با ما</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>۰۹۲۱۱۶۸۲۲۶۴</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@homeappliances.ir</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© ۱۴۰۳ فروشگاه لوازم خانگی. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}

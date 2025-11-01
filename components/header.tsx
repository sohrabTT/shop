"use client"

import { ShoppingCart, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"

export function Header() {
  const { getTotalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              فروشگاه لوازم خانگی
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="جستجوی محصولات..." className="pr-10" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 mr-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                محصولات
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                بلاگ
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                درباره ما
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                تماس با ما
              </Link>
            </div>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

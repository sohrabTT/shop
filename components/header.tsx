"use client"

import { useState } from "react"
import { ShoppingCart, Search, Menu, User, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const { getTotalItems } = useCart()
  const { user, isAuthenticated, logout } = useAuth()
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
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

            {/* Authentication Section */}
            <div className="flex items-center gap-2">
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <Link href="/profile" className="text-sm hover:text-primary transition-colors">
                    {user?.name}
                  </Link>
                  <Button variant="ghost" size="icon" onClick={handleLogout}>
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" asChild>
                    <Link href="/login">ورود</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">ثبت‌نام</Link>
                  </Button>
                </div>
              )}

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

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  <Link href="/" className="text-sm font-medium hover:text-primary">
                    محصولات
                  </Link>
                  <Link href="/blog" className="text-sm font-medium hover:text-primary">
                    بلاگ
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:text-primary">
                    درباره ما
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:text-primary">
                    تماس با ما
                  </Link>
                  
                  {isAuthenticated ? (
                    <div className="pt-4 border-t border-border space-y-2">
                      <div className="flex items-center gap-2 mb-3">
                        <User className="h-4 w-4" />
                        <div>
                          <p className="text-sm font-medium">{user?.name}</p>
                          <p className="text-xs text-muted-foreground">{user?.email}</p>
                        </div>
                      </div>
                      <Link href="/profile" className="text-sm hover:text-primary block">پروفایل</Link>
                      <button
                        onClick={handleLogout}
                        className="text-sm text-red-600 hover:text-red-700"
                      >
                        خروج
                      </button>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-border space-y-2">
                      <Link href="/login" className="text-sm hover:text-primary block">ورود</Link>
                      <Link href="/register" className="text-sm hover:text-primary block">ثبت‌نام</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

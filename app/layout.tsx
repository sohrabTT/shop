import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/hooks/use-cart"
import { AuthProvider } from "@/contexts/auth-context"
import ChatWidget from "@/components/chat-widget"
import "./globals.css"

const vazirmatn = Vazirmatn({ subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "فروشگاه لوازم خانگی",
  description: "بهترین لوازم خانگی با قیمت مناسب",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body className={`${vazirmatn.className} font-sans antialiased`}>
        <AuthProvider>
          <CartProvider>
            {children}
            <ChatWidget />
          </CartProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}

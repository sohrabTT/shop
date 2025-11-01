"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryFilter } from "@/components/category-filter"
import { ProductCard } from "@/components/product-card"
import { ProductModal } from "@/components/product-modal"
import { Footer } from "@/components/footer"
import { products, type Product } from "@/lib/products"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("همه")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = Array.from(new Set(products.map((p) => p.category)))

  const filteredProducts =
    selectedCategory === "همه" ? products : products.filter((p) => p.category === selectedCategory)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Special Offers Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">پیشنهادات ویژه</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">دسته‌بندی محصولات</h2>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="mb-4">
          <p className="text-muted-foreground">{filteredProducts.length} محصول یافت شد</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />

      <ProductModal product={selectedProduct} open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}

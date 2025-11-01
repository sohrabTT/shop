import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { products } from "@/lib/products"
import { ProductDetailView } from "@/components/product-detail-view"
import { RelatedProducts } from "@/components/related-products"
import { Breadcrumbs } from "@/components/breadcrumbs"

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find(p => p.id === parseInt(id))
  
  if (!product) {
    return {
      title: "محصول یافت نشد",
    }
  }

  return {
    title: `${product.name} | خرید آنلاین با بهترین قیمت`,
    description: product.description,
    keywords: [
      product.name,
      product.category,
      "خرید آنلاین",
      "لوازم خانگی",
      product.features.join(", ")
    ].join(", "),
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
      type: 'website',
      siteName: 'فروشگاه لوازم خانگی',
      locale: 'fa_IR',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.image],
    },
    alternate: {
      canonical: `https://your-domain.com/product/${product.id}`,
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find(p => p.id === parseInt(id))
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">محصول یافت نشد</h1>
            <Link href="/">
              <Button>بازگشت به صفحه اصلی</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  const breadcrumbItems = [
    { label: "صفحه اصلی", href: "/" },
    { label: "محصولات", href: "/#products" },
    { label: product.category, href: `/#${product.category}` },
    { label: product.name, href: `/product/${product.id}` },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <section className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </section>

        {/* Product Detail */}
        <ProductDetailView product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">محصولات مرتبط</h2>
              <RelatedProducts products={relatedProducts} />
            </div>
          </section>
        )}

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": product.name,
              "description": product.description,
              "image": product.image,
              "category": product.category,
              "brand": {
                "@type": "Brand",
                "name": product.name.split(" ")[0]
              },
              "offers": {
                "@type": "Offer",
                "price": product.price,
                "priceCurrency": "IRR",
                "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                "url": `https://your-domain.com/product/${product.id}`
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": product.rating,
                "reviewCount": product.reviews
              },
              "additionalProperty": product.features.map(feature => ({
                "@type": "PropertyValue",
                "name": "ویژگی",
                "value": feature
              }))
            })
          }}
        />
      </main>

      <Footer />
    </div>
  )
}
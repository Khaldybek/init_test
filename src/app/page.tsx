import { Header } from "@/components/header"
import { Swiper } from "@/components/swiper"
import { Categories } from "@/components/categories"
import { ProductGrid } from "@/components/product-grid"
import { FeaturedBanners } from "@/components/featured-banners"
import { Footer } from "@/components/footer"
import type { Product } from "@/components/product-grid"

async function getProducts(): Promise<Product[]> {

    const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" })

    if (!res.ok) {

        throw new Error("Failed to fetch products")
    }

    return res.json()
}

export default async function Home() {
    const products = await getProducts()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Swiper />
                    <div className="my-16">
                        <Categories />
                    </div>
                    <ProductGrid products={products} />
                    <FeaturedBanners />
                </div>
            </main>
            <Footer />
        </div>
    )
}

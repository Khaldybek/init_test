import { ProductCard } from "@/components/product-card"

export type Product = {
    id: number
    name: string
    actualPrice: number
    discountPrice: number | null
    image: string
    rating: number
    reviews: number
    category: string
    colors: string[]
}

interface ProductGridProps {
    products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="my-12">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-red-500"></div>
                <span className="text-red-500 font-medium">Our Products</span>
            </div>
            <h2 className="text-2xl font-bold mb-8">Explore Our Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">View All Products</button>
            </div>
        </div>
    )
}

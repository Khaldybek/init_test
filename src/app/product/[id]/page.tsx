import Image from "next/image"
import { Heart, Minus, Plus, Truck, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type {Product} from "@/components/product-grid";
async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`http://localhost:3000/api/product/${id}`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Product Gallery */}
                        <div className="flex gap-4">
                            {/* Thumbnails */}
                            <div className="flex flex-col gap-4">
                                {product.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-20 h-20 border border-gray-200 rounded-md overflow-hidden cursor-pointer hover:border-gray-300"
                                    >
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${product.name} thumbnail ${index + 1}`}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className="flex-1 border border-gray-200 rounded-md overflow-hidden">
                                <Image
                                    src={product.mainImage || "/placeholder.svg"}
                                    alt={product.name}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div>
                            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex text-yellow-400">
                                    {"★★★★★".split("").map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">({product.reviews} Reviews)</span>
                                {product.inStock && <span className="text-sm text-green-500 ml-2">In Stock</span>}
                            </div>

                            <div className="text-xl font-bold mb-4">${product.price.toFixed(2)}</div>

                            <p className="text-gray-600 mb-6">{product.description}</p>

                            <div className="mb-6">
                                <div className="font-medium mb-2">Colours:</div>
                                <div className="flex gap-2">
                                    {product.colors.map((color, index) => (
                                        <button
                                            key={index}
                                            className={`w-8 h-8 rounded-full border-2 ${index === 0 ? "border-gray-400" : "border-transparent"}`}
                                            style={{ backgroundColor: color.value }}
                                            aria-label={`Select ${color.name} color`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="font-medium mb-2">Size:</div>
                                <div className="flex gap-2">
                                    {product.sizes.map((size, index) => (
                                        <button
                                            key={index}
                                            className={`w-8 h-8 flex items-center justify-center rounded-md border ${
                                                size.selected
                                                    ? "bg-red-500 text-white border-red-500"
                                                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                                            }`}
                                        >
                                            {size.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center border border-gray-300 rounded-md">
                                    <button className="px-3 py-2 border-r border-gray-300">
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <Input
                                        type="text"
                                        value="2"
                                        className="w-12 text-center border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                    <button className="px-3 py-2 border-l border-gray-300">
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>

                                <Button className="bg-red-500 hover:bg-red-600 text-white px-6">Buy Now</Button>

                                <Button variant="outline" size="icon" className="rounded-md border-gray-300">
                                    <Heart className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Delivery Information */}
                            <div className="border border-gray-200 rounded-lg divide-y">
                                <div className="p-4 flex items-start gap-4">
                                    <Truck className="h-6 w-6 text-gray-500 mt-1" />
                                    <div>
                                        <h3 className="font-medium">Free Delivery</h3>
                                        <p className="text-sm text-gray-500">Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>
                                <div className="p-4 flex items-start gap-4">
                                    <RotateCcw className="h-6 w-6 text-gray-500 mt-1" />
                                    <div>
                                        <h3 className="font-medium">Return Delivery</h3>
                                        <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
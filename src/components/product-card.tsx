"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/components/product-grid"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const { id, name, actualPrice, discountPrice, image, rating, reviews, colors } = product
    const isOnSale = discountPrice !== null && discountPrice < actualPrice

    // Generate stars based on rating
    const renderStars = () => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={`star-${i}`} className="text-yellow-400">
          ★
        </span>,
            )
        }

        if (hasHalfStar) {
            stars.push(
                <span key="half-star" className="text-yellow-400">
          ★
        </span>,
            )
        }

        const emptyStars = 5 - stars.length
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <span key={`empty-${i}`} className="text-gray-300">
          ★
        </span>,
            )
        }

        return stars
    }

    return (
        <div
            className="bg-white rounded-lg p-4 relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative bg-gray-100 rounded-lg mb-4 overflow-hidden">
                {isOnSale && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded z-10">Sale</div>
                )}

                <Link href={`/product/${id}`}>
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={name}
                        width={200}
                        height={200}
                        className="w-full h-48 object-contain p-4"
                    />
                </Link>

                <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <button className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100">
                        <Heart className="h-4 w-4 text-black" />
                    </button>
                    <button className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100">
                        <Eye className="h-4 w-4 text-black" />
                    </button>
                </div>

                {isHovered && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center transition-all duration-300 ease-in-out">
                        <Button variant="ghost" className="text-white hover:text-white hover:bg-transparent">
                            Add To Cart
                        </Button>
                    </div>
                )}
            </div>

            <Link href={`/product/${id}`} className="block">
                <h3 className="font-medium mb-1 text-black font-bold">{name}</h3>
            </Link>

            <div className="flex items-center gap-1 mb-1">
                <div className="flex">{renderStars()}</div>
                <span className="text-xs text-gray-500">({reviews})</span>
            </div>

            <div className="flex items-center gap-2">
                {isOnSale ? (
                    <>
                        <span className="text-red-500 font-medium">${discountPrice}</span>
                        <span className="text-gray-500 line-through text-sm">${actualPrice}</span>
                    </>
                ) : (
                    <span className="text-red-500 font-medium">${actualPrice}</span>
                )}
            </div>

            {colors.length > 0 && (
                <div className="flex gap-1 mt-2">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

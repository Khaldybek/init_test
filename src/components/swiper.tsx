"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
const slides = [
    {
        id: 1,
        title: "Up to 10% off Voucher",
        subtitle: "iPhone 14 Series",
        image: "/iPhone.png",
        buttonText: "Shop Now",
        buttonLink: "#",
        bgColor: "bg-black",
    },
    {
        id: 2,
        title: "New Collection",
        subtitle: "Latest Tech Gadgets",
        image: "/iPhone.png?height=500&width=400",
        buttonText: "Discover",
        buttonLink: "#",
        bgColor: "bg-gray-900",
    },
]

export function Swiper() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative mt-6 overflow-hidden rounded-lg">
        <div className="relative">
        {slides.map((slide, index) => (
                <div
                    key={slide.id}
            className={`${
                index === currentSlide ? "opacity-100" : "opacity-0 absolute top-0 left-0"
            } transition-opacity duration-500 ease-in-out w-full`}
        >
        <div className={`${slide.bgColor} text-white rounded-lg overflow-hidden`}>
    <div className="flex flex-col md:flex-row items-center">
    <div className="p-8 md:p-12 md:w-1/2">
    <div className="flex items-center gap-2 mb-4">
    <Image
        src=""
    alt="Apple logo"
    width={30}
    height={30}
    className="invert"
        />
        <span>{slide.subtitle}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{slide.title}</h2>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black group">
        {slide.buttonText}
        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        </div>
        <div className="md:w-1/2 p-4 md:p-0">
    <Image
        src={slide.image || "/placeholder.svg"}
    alt={slide.title}
    width={500}
    height={500}
    className="object-contain"
        />
        </div>
        </div>
        </div>
        </div>
))}
    </div>

    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
                <button
                    key={index}
            onClick={() => setCurrentSlide(index)}
    className={`h-2 w-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
    aria-label={`Go to slide ${index + 1}`}
    />
))}
    </div>
    </div>
)
}

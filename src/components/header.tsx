"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Heart, ShoppingCart, ChevronDown, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full">
            {/* Top announcement bar */}
            <div className="w-full bg-black text-white py-2 px-4 flex justify-between items-center">
                <p className="text-sm text-center flex-1">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</p>
                <div className="flex items-center gap-2">
                    <span className="text-sm">ShopNow</span>
                    <div className="flex items-center gap-1">
                        <span className="text-sm">English</span>
                        <ChevronDown className="h-4 w-4" />
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <div className="border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-12">
                            <Link href="/ " className="text-xl font-bold">
                                Exclusive
                            </Link>
                            <nav className="hidden md:flex items-center gap-8">
                                <Link href="/public" className="text-sm font-medium">
                                    Home
                                </Link>
                                <Link href="/contact" className="text-sm font-medium">
                                    Contact
                                </Link>
                                <Link href="/about" className="text-sm font-medium">
                                    About
                                </Link>
                                <Link href="/sign-up" className="text-sm font-medium">
                                    Sign Up
                                </Link>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative hidden md:flex items-center">
                                <Input
                                    type="search"
                                    placeholder="What are you looking for?"
                                    className="w-64 bg-gray-100 border-0 rounded-md pr-8"
                                />
                                <Search className="absolute right-2 h-4 w-4 text-gray-500" />
                            </div>

                            <div className="flex items-center gap-4">
                                <Heart className="h-5 w-5 cursor-pointer" />

                                <div className="relative">
                                    <ShoppingCart className="h-5 w-5 cursor-pointer" />
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    2
                  </span>
                                </div>

                                <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="relative">
                                            <User className="h-5 w-5" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-56">
                                        <DropdownMenuItem className="flex items-center gap-2 py-2">
                                            <User className="h-4 w-4" />
                                            <span>Manage My Account</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="flex items-center gap-2 py-2">
                                            <ShoppingCart className="h-4 w-4" />
                                            <span>My Order</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="flex items-center gap-2 py-2">
                                            <span className="h-4 w-4 flex items-center justify-center">✕</span>
                                            <span>My Cancellations</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="flex items-center gap-2 py-2">
                                            <span className="h-4 w-4 flex items-center justify-center">★</span>
                                            <span>My Reviews</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="flex items-center gap-2 py-2">
                                            <LogOut className="h-4 w-4" />
                                            <span>Logout</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

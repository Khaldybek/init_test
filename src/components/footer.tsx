import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Exclusive Column */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-bold mb-6">Exclusive</h3>
                        <div className="mb-4">
                            <h4 className="font-medium mb-2">Subscribe</h4>
                            <p className="text-sm text-gray-400 mb-4">Get 10% off your first order</p>
                            <div className="flex">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent border-gray-700 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                                <Button variant="outline" size="icon" className="rounded-l-none border-gray-700 border-l-0">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Support Column */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-bold mb-6">Support</h3>
                        <address className="not-italic text-sm text-gray-400 mb-4">
                            111 Bijoy sarani, Dhaka,
                            <br />
                            DH 1515, Bangladesh.
                        </address>
                        <p className="text-sm text-gray-400 mb-2">exclusive@gmail.com</p>
                        <p className="text-sm text-gray-400">+88015-88888-9999</p>
                    </div>

                    {/* Account Column */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-bold mb-6">Account</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Login / Register
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Cart
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Shop
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Link Column */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-bold mb-6">Quick Link</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Terms Of Use
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Download App Column */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-bold mb-6">Download App</h3>
                        <p className="text-xs text-gray-400 mb-4">Save $3 with App New User Only</p>

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div className="  rounded-lg">
                                    <Image src="/qr.png?height=180&width=180" alt="QR Code" width={90} height={90} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link href="#" className="block">
                                        <Image
                                            src="/gp.png?height=60&width=180"
                                            alt="Google Play"
                                            width={120}
                                            height={40}
                                            className="h-10 object-contain"
                                        />
                                    </Link>
                                    <Link href="#" className="block">
                                        <Image
                                            src="/as.png?height=40&width=120"
                                            alt="App Store"
                                            width={120}
                                            height={40}
                                            className="h-10 object-contain"
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-4">
                                <Link href="#" className="text-gray-400 hover:text-white">
                                    <Facebook className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-white">
                                    <Twitter className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-white">
                                    <Instagram className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-white">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
                    <p>© Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>
        </footer>
    )
}

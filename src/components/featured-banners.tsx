import Image from "next/image"
import Link from "next/link"

export function FeaturedBanners() {
    return (
        <div className="my-12">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-red-500"></div>
                <span className="text-red-500 font-medium">Featured</span>
            </div>
            <h2 className="text-2xl font-bold mb-8">New Arrival</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* PlayStation 5 Banner - Large */}
                <div className="relative overflow-hidden rounded-lg bg-black text-white h-[400px]">
                    <Image
                        src="/psinf.png?height=400&width=600"
                        alt="PlayStation 5"
                        width={600}
                        height={400}
                        className="object-contain w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
                        <p className="text-sm text-gray-300 mb-4">Black and White version of the PS5 coming out on sale.</p>
                        <Link
                            href="#"
                            className="inline-block text-sm font-medium border-b border-white hover:border-gray-300 transition-colors"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* Right Column - 3 Smaller Banners */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Women's Collections Banner */}
                    <div className="relative overflow-hidden rounded-lg bg-black text-white h-[180px]">
                        <Image
                            src="/women.png?height=180&width=600"
                            alt="Women's Collections"
                            width={600}
                            height={180}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-xl font-bold mb-1"> Women's Collections</h3>
                            <p className="text-xs text-gray-200 mb-2">Featured woman collections that give you another vibe.</p>
                            <Link
                                href="#"
                                className="inline-block text-sm font-medium border-b border-white hover:border-gray-300 transition-colors"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>

                    {/* Two Small Banners in a Row */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Speakers Banner */}
                        <div className="relative overflow-hidden rounded-lg bg-black text-white h-[180px]">
                            <Image
                                src="/speaker.png?height=180&width=280"
                                alt="Speakers"
                                width={280}
                                height={180}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                            <div className="absolute bottom-0 left-0 p-4">
                                <h3 className="text-lg font-bold mb-1">Speakers</h3>
                                <p className="text-xs text-gray-200 mb-2">Amazon wireless speakers</p>
                                <Link
                                    href="#"
                                    className="inline-block text-sm font-medium border-b border-white hover:border-gray-300 transition-colors"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>

                        {/* Perfume Banner */}
                        <div className="relative overflow-hidden rounded-lg bg-black text-white h-[180px]">
                            <Image
                                src="/parfume.png?height=180&width=280"
                                alt="Perfume"
                                width={280}
                                height={180}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                            <div className="absolute bottom-0 left-0 p-4">
                                <h3 className="text-lg font-bold mb-1">Perfume</h3>
                                <p className="text-xs text-gray-200 mb-2">GUCCI INTENSE OUD EDP</p>
                                <Link
                                    href="#"
                                    className="inline-block text-sm font-medium border-b border-white hover:border-gray-300 transition-colors"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

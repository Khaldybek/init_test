import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Categories() {
    return (
        <div className="bg-black text-white rounded-lg overflow-hidden">
            <div className="p-8">
                <span className="text-green-400 text-sm">Categories</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Enhance Your Music Experience</h2>

                <div className="flex gap-4 mb-8">
                    <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center">
                        <span className="font-bold">23</span>
                        <span className="text-xs">Hours</span>
                    </div>
                    <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center">
                        <span className="font-bold">05</span>
                        <span className="text-xs">Days</span>
                    </div>
                    <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center">
                        <span className="font-bold">59</span>
                        <span className="text-xs">Minutes</span>
                    </div>
                    <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center">
                        <span className="font-bold">35</span>
                        <span className="text-xs">Seconds</span>
                    </div>
                </div>

                <Button className="bg-green-400 hover:bg-green-500 text-black">Buy Now!</Button>
            </div>

            <div className="flex justify-center p-4">
                <Image
                    src="/jj.png?height=300&width=500"
                    alt="JBL Speaker"
                    width={500}
                    height={300}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

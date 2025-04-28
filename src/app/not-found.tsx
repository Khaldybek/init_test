import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
                <h1 className="text-5xl font-bold mb-4">404 Not Found</h1>
                <p className="text-gray-500 mb-8">Your visited page not found. You may go home page.</p>
                <Link href="/">
                    <Button className="bg-red-500 hover:bg-red-600 text-white px-6">Back to home page</Button>
                </Link>
            </main>
            <Footer />
        </div>
    )
}

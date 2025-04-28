"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GlobalError({
                                        error,
                                        reset,
                                    }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <html>
        <body>
        <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
            <h1 className="text-5xl font-bold mb-4">Something went wrong!</h1>
            <p className="text-gray-500 mb-8">We apologize for the inconvenience.</p>
            <div className="flex gap-4">
                <Button onClick={() => reset()} variant="outline">
                    Try again
                </Button>
                <Link href="/">
                    <Button className="bg-red-500 hover:bg-red-600 text-white">Back to home</Button>
                </Link>
            </div>
        </div>
        </body>
        </html>
    )
}

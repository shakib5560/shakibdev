import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">
            <h2 className="text-4xl font-bold mb-4">Not Found</h2>
            <p className="mb-4">Could not find requested resource</p>
            <Link href="/" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Return Home
            </Link>
        </div>
    )
}

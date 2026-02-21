import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
            <div className="text-center space-y-6 max-w-md">
                {/* 404 Number */}
                <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    404
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Page Not Found
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-400 leading-relaxed">
                    Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/"
                        className="px-6 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                        Back
                    </Link>
                </div>

                {/* Decorative element */}
                <div className="pt-8">
                    <div className="inline-block p-4 bg-gray-800 rounded-lg border border-gray-700">
                        <p className="text-sm text-gray-500">Error Code: 404</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

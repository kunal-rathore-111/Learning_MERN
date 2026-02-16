
"use client"

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-2xl w-full">
                <div className="text-center space-y-6">
                    {/* 404 Number */}
                    <div className="relative">
                        <h1 className="text-8xl md:text-9xl font-bold text-slate-200 dark:text-slate-800 select-none">
                            404
                        </h1>
                    </div>

                    {/* Error Icon */}
                    <div className="flex justify-center">
                        <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-4">
                            <svg
                                className="w-12 h-12 text-slate-600 dark:text-slate-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                            Page not found
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-md mx-auto">
                            Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-2 py-4">
                        <div className="h-px w-12 bg-border"></div>
                        <div className="h-1 w-1 rounded-full bg-border"></div>
                        <div className="h-px w-12 bg-border"></div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Back to Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-2.5 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Go Back
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
}

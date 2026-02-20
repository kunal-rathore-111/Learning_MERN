export default function LoadingComp() {
    return (
        <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),transparent_60%)]" />

            <div className="relative z-10 w-full max-w-sm space-y-8 text-center">
                <div className="relative mx-auto h-20 w-20">
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-zinc-200 border-t-blue-500 dark:border-zinc-800 dark:border-t-blue-400" />
                    <div className="absolute inset-3 animate-pulse rounded-full border border-blue-200/80 dark:border-blue-900/80" />
                    <div className="absolute inset-7 rounded-full bg-blue-500/20 blur-sm" />
                </div>

                <div className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                        Loading content...
                    </h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Preparing your page, this will take a moment.
                    </p>
                </div>

                <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-2">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500" />
                </div>

                <div className="space-y-3 pt-2">
                    <div className="h-2 w-full animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
                    <div className="h-2 w-3/4 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
            </div>
        </div>
    );
}
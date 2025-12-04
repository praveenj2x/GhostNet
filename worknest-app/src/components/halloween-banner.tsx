"use client";

export function HalloweenBanner() {
    return (
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border border-primary/30 p-6 mb-6">
            <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-5xl animate-glow">🎃</span>
                    <div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Happy Halloween! 🎃👻
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                            Spooky season is here! Enjoy the festive vibes.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 text-3xl">
                    <span className="animate-bounce-subtle">👻</span>
                    <span className="animate-bounce-subtle animation-delay-2000">🦇</span>
                    <span className="animate-bounce-subtle animation-delay-4000">🕷️</span>
                </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-2 left-10 text-4xl">🎃</div>
                <div className="absolute bottom-2 right-10 text-4xl">👻</div>
                <div className="absolute top-1/2 left-1/3 text-3xl">🦇</div>
                <div className="absolute top-1/3 right-1/4 text-3xl">🕸️</div>
            </div>
        </div>
    );
}

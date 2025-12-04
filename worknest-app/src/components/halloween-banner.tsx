"use client";

export function HalloweenBanner() {
    return (
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 border-2 border-primary/40 p-8 mb-6 shadow-2xl shadow-primary/30">
            <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <span className="text-7xl animate-glow">🎃</span>
                    <div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                            Happy Halloween! 🎃👻
                        </h2>
                        <p className="text-base text-muted-foreground mt-2">
                            🕷️ Spooky season is here! Enjoy the festive vibes. 🦇
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 text-5xl">
                    <span className="animate-bounce-subtle">👻</span>
                    <span className="animate-bounce-subtle animation-delay-2000">🦇</span>
                    <span className="animate-bounce-subtle animation-delay-4000">🕷️</span>
                </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-3 left-12 text-5xl animate-float">🎃</div>
                <div className="absolute bottom-3 right-12 text-5xl animate-float animation-delay-2000">👻</div>
                <div className="absolute top-1/2 left-1/3 text-4xl animate-swing">🦇</div>
                <div className="absolute top-1/3 right-1/4 text-4xl">🕸️</div>
                <div className="absolute bottom-1/3 left-1/4 text-3xl">💀</div>
                <div className="absolute top-2/3 right-1/3 text-3xl animate-bounce-subtle">🍬</div>
            </div>

            {/* Glowing effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-pulse-glow"></div>
        </div>
    );
}

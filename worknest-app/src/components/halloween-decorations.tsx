"use client";

export function HalloweenDecorations() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Floating pumpkins */}
            <div className="absolute top-10 left-10 text-5xl animate-float opacity-30 animate-glow">
                🎃
            </div>
            <div className="absolute top-20 right-20 text-4xl animate-float animation-delay-2000 opacity-25">
                🎃
            </div>
            <div className="absolute bottom-20 left-1/4 text-6xl animate-bounce-subtle animation-delay-4000 opacity-20 animate-glow">
                🎃
            </div>
            <div className="absolute top-1/2 right-1/4 text-3xl animate-float opacity-20">
                🎃
            </div>

            {/* Floating ghosts */}
            <div className="absolute top-1/3 right-10 text-5xl animate-float animation-delay-2000 opacity-30">
                👻
            </div>
            <div className="absolute bottom-1/3 left-20 text-4xl animate-float opacity-35">
                👻
            </div>
            <div className="absolute top-2/3 left-1/3 text-3xl animate-float animation-delay-4000 opacity-25">
                👻
            </div>

            {/* Bats */}
            <div className="absolute top-1/4 left-1/3 text-3xl animate-float animation-delay-4000 opacity-25">
                🦇
            </div>
            <div className="absolute top-2/3 right-1/3 text-3xl animate-float opacity-30">
                🦇
            </div>
            <div className="absolute bottom-1/4 right-10 text-2xl animate-float animation-delay-2000 opacity-20">
                🦇
            </div>

            {/* Spiders and cobwebs */}
            <div className="absolute top-5 left-5 text-2xl opacity-40">
                🕸️
            </div>
            <div className="absolute top-5 right-5 text-2xl opacity-40">
                🕸️
            </div>
            <div className="absolute top-1/2 left-5 text-xl animate-swing opacity-30">
                🕷️
            </div>
            <div className="absolute bottom-10 right-1/4 text-xl animate-swing animation-delay-2000 opacity-25">
                🕷️
            </div>

            {/* Candy and treats */}
            <div className="absolute bottom-1/4 left-10 text-2xl animate-bounce-subtle opacity-20">
                🍬
            </div>
            <div className="absolute top-3/4 right-20 text-2xl animate-bounce-subtle animation-delay-2000 opacity-20">
                🍭
            </div>

            {/* Skulls */}
            <div className="absolute bottom-10 left-1/3 text-3xl opacity-15">
                💀
            </div>
            <div className="absolute top-1/3 left-10 text-2xl opacity-15">
                💀
            </div>

            {/* Moon */}
            <div className="absolute top-10 right-1/3 text-6xl opacity-20 animate-pulse-glow">
                🌙
            </div>
        </div>
    );
}

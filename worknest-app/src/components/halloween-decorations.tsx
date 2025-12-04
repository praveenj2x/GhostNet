"use client";

export function HalloweenDecorations() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Floating pumpkins */}
            <div className="absolute top-10 left-10 text-4xl animate-float opacity-30">
                🎃
            </div>
            <div className="absolute top-20 right-20 text-3xl animate-float animation-delay-2000 opacity-25">
                🎃
            </div>
            <div className="absolute bottom-20 left-1/4 text-5xl animate-bounce-subtle animation-delay-4000 opacity-20">
                🎃
            </div>

            {/* Floating ghosts */}
            <div className="absolute top-1/3 right-10 text-4xl animate-float animation-delay-2000 opacity-25">
                👻
            </div>
            <div className="absolute bottom-1/3 left-20 text-3xl animate-float opacity-30">
                👻
            </div>

            {/* Bats */}
            <div className="absolute top-1/4 left-1/3 text-2xl animate-float animation-delay-4000 opacity-20">
                🦇
            </div>
            <div className="absolute top-2/3 right-1/3 text-2xl animate-float opacity-25">
                🦇
            </div>
        </div>
    );
}

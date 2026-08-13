import React from "react";

export function LiquidBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Top Left Liquid Blob */}
      <div className="absolute -top-20 -left-20 size-[280px] sm:size-[400px] rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-cyan-400/20 blur-[60px] sm:blur-[80px] animate-liquid transform-gpu" />

      {/* Middle Right Liquid Blob */}
      <div className="absolute top-[35%] -right-20 size-[260px] sm:size-[380px] rounded-full bg-gradient-to-bl from-violet-600/20 via-fuchsia-500/15 to-pink-400/15 blur-[60px] sm:blur-[80px] animate-liquid-delayed transform-gpu" />

      {/* Bottom Left Liquid Blob */}
      <div className="absolute bottom-[10%] -left-20 size-[280px] sm:size-[400px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-emerald-400/15 blur-[60px] sm:blur-[80px] animate-liquid transform-gpu" />
    </div>
  );
}

export default LiquidBackground;

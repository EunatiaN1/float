import React from "react";

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute -top-28 left-[12%] h-[460px] w-[460px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.06) 35%, rgba(249,115,22,0) 72%)",
        }}
      />
      <div
        className="absolute top-[10%] right-[12%] h-[520px] w-[520px] rounded-full opacity-18 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.9) 0%, rgba(249,115,22,0.08) 38%, rgba(249,115,22,0) 72%)",
        }}
      />
      <div
        className="absolute bottom-[-80px] left-[28%] h-[360px] w-[360px] rounded-full opacity-12 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 72%)",
        }}
      />
    </div>
  );
}

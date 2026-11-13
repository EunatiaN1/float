import React from "react";

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary Orange Spaza Ambient Glow */}
      <div
        className="absolute -top-32 left-1/3 w-[600px] h-[500px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, #f97316 0%, rgba(249,115,22,0) 70%)",
        }}
      />
      {/* Subtle XRPL Blue Ambient Glow */}
      <div
        className="absolute top-1/2 -right-32 w-[550px] h-[550px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, #2388ff 0%, rgba(35,136,255,0) 70%)",
        }}
      />
      {/* Bottom Subtle Amber Hue */}
      <div
        className="absolute -bottom-32 left-1/4 w-[500px] h-[400px] rounded-full opacity-10 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #d97706 0%, rgba(217,119,6,0) 70%)",
        }}
      />
    </div>
  );
}

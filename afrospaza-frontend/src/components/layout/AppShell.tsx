"use client";

import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { BackgroundGlow } from "./BackgroundGlow";
import { useUIStore } from "@/stores/uiStore";
import { AlertCircle, CheckCircle2, Info, X } from "lucide-react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { toasts, removeToast } = useUIStore();

  return (
    <div className="min-h-screen bg-background text-zinc-100 flex flex-col relative">
      <BackgroundGlow />
      <Navbar />

      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full z-10 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Toast Notification Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map((toast) => {
          const icons = {
            success: <CheckCircle2 size={16} className="text-emerald-400" />,
            error: <AlertCircle size={16} className="text-red-400" />,
            warning: <AlertCircle size={16} className="text-amber-400" />,
            info: <Info size={16} className="text-blue-400" />,
          }[toast.type];

          const borderColors = {
            success: "border-emerald-500/40",
            error: "border-red-500/40",
            warning: "border-amber-500/40",
            info: "border-blue-500/40",
          }[toast.type];

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-start gap-3 p-3.5 glass-card ${borderColors} rounded-xl shadow-xl text-xs text-white animate-fadeIn`}
            >
              <span className="shrink-0 mt-0.5">{icons}</span>
              <div className="flex-1">
                <p className="font-bold">{toast.title}</p>
                {toast.description && (
                  <p className="text-zinc-400 mt-0.5">{toast.description}</p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-zinc-500 hover:text-white shrink-0"
              >
                <X size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import React, { useRef, useEffect } from "react";
import { Terminal, Shield } from "lucide-react";

interface TerminalLogProps {
  logs: string[];
}

export function TerminalLog({ logs }: TerminalLogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="rounded-xl border border-border bg-black/90 font-mono text-[11px] overflow-hidden flex flex-col h-80">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-zinc-900/90 border-b border-border/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-zinc-400 font-semibold text-[10px] ml-2">
            guard-adversarial-daemon // tty0
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ACTIVE PROXY
        </span>
      </div>

      {/* Terminal Body */}
      <div
        ref={scrollRef}
        className="p-4 flex-1 overflow-y-auto space-y-1.5 text-zinc-300 select-text"
      >
        <p className="text-zinc-600">{"// AfroSpaza Guard Pre-Flight Daemon Initialized."}</p>
        <p className="text-zinc-600">{"// XRPL RPC: https://s.altnet.rippletest.net:51234"}</p>
        <p className="text-zinc-600">{"// Ready for adversarial vector injection..."}</p>

        {logs.map((log, index) => {
          const isFlag = log.includes("Flag:") || log.includes("INTERCEPTED");
          const isAction = log.includes("Action:");
          const isBlocked = log.includes("BLOCKED") || log.includes("Blocked");

          return (
            <div
              key={index}
              className={`leading-relaxed ${
                isBlocked
                  ? "text-red-400 font-bold"
                  : isFlag
                  ? "text-amber-300"
                  : isAction
                  ? "text-blue-300"
                  : "text-zinc-300"
              }`}
            >
              {log}
            </div>
          );
        })}

        <div className="flex items-center gap-1 text-orange-400 pt-1">
          <span>spaza-guard$</span>
          <span className="animate-cursor font-bold">_</span>
        </div>
      </div>
    </div>
  );
}

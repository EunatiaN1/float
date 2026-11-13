import { useEffect } from "react";
import { useAgentStore } from "@/stores/agentStore";

export function useAgentFeed(autoSimulate = true) {
  const { agents, logs, addLog, updateAgentStatus, clearLogs } = useAgentStore();

  useEffect(() => {
    if (!autoSimulate) return;

    // Periodic heartbeat simulation
    const interval = setInterval(() => {
      const sampleEvents = [
        {
          agent: "PROCUREMENT" as const,
          level: "INFO" as const,
          msg: "Scanning local wholesale price books for sunflower cooking oil specials.",
        },
        {
          agent: "GUARD" as const,
          level: "SUCCESS" as const,
          msg: "Heartbeat verification: Active spending within approved safety threshold.",
        },
        {
          agent: "TREASURY" as const,
          level: "INFO" as const,
          msg: "XRPL PaymentChannel health check: 3 channels active with liquidity headroom.",
        },
      ];
      const randomEvent = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
      addLog({
        agentType: randomEvent.agent,
        level: randomEvent.level,
        message: randomEvent.msg,
      });
    }, 18000);

    return () => clearInterval(interval);
  }, [autoSimulate, addLog]);

  return {
    agents,
    logs,
    addLog,
    updateAgentStatus,
    clearLogs,
  };
}

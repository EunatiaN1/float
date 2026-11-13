import { create } from "zustand";
import { AgentLog, AgentStatusInfo } from "@/types/agent";

const initialAgents: AgentStatusInfo[] = [
  {
    type: "PROCUREMENT",
    name: "Procurement Agent (Agent-1)",
    status: "SCANNING",
    currentTask: "Negotiating bulk maize pricing with 3 vetted suppliers",
    activeOrdersCount: 2,
    lastHeartbeat: "Just now",
    accuracyRate: 99.4,
  },
  {
    type: "GUARD",
    name: "Mandate Guard (Pre-Flight Interceptor)",
    status: "VERIFYING",
    currentTask: "Pre-validating Order #ORD-8921 against ZAR spending limits",
    activeOrdersCount: 1,
    lastHeartbeat: "10s ago",
    accuracyRate: 100.0,
  },
  {
    type: "TREASURY",
    name: "Treasury Agent (Agent-2)",
    status: "SETTLING",
    currentTask: "Locking 250 RLUSD escrow on XRPL ledger",
    activeOrdersCount: 1,
    lastHeartbeat: "30s ago",
    accuracyRate: 99.8,
  },
  {
    type: "LOGISTICS",
    name: "Logistics Agent (Agent-3)",
    status: "IDLE",
    currentTask: "Waiting for driver dispatch acknowledgment",
    activeOrdersCount: 0,
    lastHeartbeat: "1m ago",
    accuracyRate: 98.7,
  },
];

const initialLogs: AgentLog[] = [
  {
    id: "log_1",
    timestamp: "14:38:12",
    agentType: "PROCUREMENT",
    level: "INFO",
    message: "Requested bulk quote for 40x 10kg White Star Maize from Khayelitsha Traders.",
  },
  {
    id: "log_2",
    timestamp: "14:38:14",
    agentType: "GUARD",
    level: "SUCCESS",
    message: "Pre-flight check passed: Amount R4,560 within Maize category daily cap of R12,000.",
  },
  {
    id: "log_3",
    timestamp: "14:38:18",
    agentType: "TREASURY",
    level: "SUCCESS",
    message: "XRPL Escrow created: 250.00 RLUSD locked for delivery fulfillment.",
    metadata: { txHash: "4A897328A65DB01B7DDD9E3A5B1F1F828A966AA53F6BA5744C8B0BAC5F51AED3" },
  },
  {
    id: "log_4",
    timestamp: "14:39:02",
    agentType: "GUARD",
    level: "SECURITY",
    message: "INTERCEPTED: Malformed quote payload from unvetted supplier rUnvetted99. Blocked.",
  },
];

interface AgentStoreState {
  agents: AgentStatusInfo[];
  logs: AgentLog[];
  addLog: (log: Omit<AgentLog, "id" | "timestamp">) => void;
  updateAgentStatus: (type: AgentStatusInfo["type"], status: AgentStatusInfo["status"], currentTask?: string) => void;
  clearLogs: () => void;
}

export const useAgentStore = create<AgentStoreState>((set) => ({
  agents: initialAgents,
  logs: initialLogs,

  addLog: (log) =>
    set((state) => ({
      logs: [
        {
          ...log,
          id: `log_${Date.now()}`,
          timestamp: new Date().toLocaleTimeString("en-ZA"),
        },
        ...state.logs.slice(0, 49), // retain last 50
      ],
    })),

  updateAgentStatus: (type, status, currentTask) =>
    set((state) => ({
      agents: state.agents.map((a) =>
        a.type === type
          ? {
              ...a,
              status,
              currentTask: currentTask || a.currentTask,
              lastHeartbeat: "Just now",
            }
          : a
      ),
    })),

  clearLogs: () => set({ logs: [] }),
}));

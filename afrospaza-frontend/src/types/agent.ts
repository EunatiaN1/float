export type AgentType = "PROCUREMENT" | "TREASURY" | "LOGISTICS" | "GUARD";

export type AgentStatus = "IDLE" | "SCANNING" | "NEGOTIATING" | "VERIFYING" | "SETTLING" | "INTERCEPTED";

export interface AgentLog {
  id: string;
  timestamp: string;
  agentType: AgentType;
  level: "INFO" | "WARN" | "ERROR" | "SUCCESS" | "SECURITY";
  message: string;
  metadata?: Record<string, any>;
}

export interface AgentStatusInfo {
  type: AgentType;
  name: string;
  status: AgentStatus;
  currentTask: string;
  activeOrdersCount: number;
  lastHeartbeat: string;
  accuracyRate: number;
}

export type AttackType =
  | "PROMPT_INJECTION"
  | "OVERSPEND_EXPLOIT"
  | "UNVETTED_SELLER"
  | "DOUBLE_SETTLEMENT"
  | "REPLAY_ESCROW";

export interface DefenseLayer {
  id: string;
  name: string;
  description: string;
  status: "ACTIVE" | "INSPECTING" | "INTERCEPTED" | "PASSED";
  details?: string;
}

export interface SimulationResult {
  id: string;
  attackType: AttackType;
  timestamp: string;
  payloadSummary: string;
  intercepted: boolean;
  interceptingLayer: string;
  reason: string;
  actionTaken: "BLOCKED" | "QUARANTINED" | "ALERT_SENT" | "ALLOWED";
  logs: string[];
}

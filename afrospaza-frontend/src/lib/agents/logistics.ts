export interface LogisticsTrackingInfo {
  orderId: string;
  driverName: string;
  driverVehicle: string;
  etaMinutes: number;
  currentCheckpoint: string;
  status: "ASSIGNED" | "PICKED_UP" | "EN_ROUTE" | "DELIVERED";
}

export class LogisticsAgentClient {
  public async getTracking(orderId: string): Promise<LogisticsTrackingInfo> {
    return {
      orderId,
      driverName: "Bongani Dlamini",
      driverVehicle: "Toyota Hilux (GP-829-SPZ)",
      etaMinutes: 24,
      currentCheckpoint: "Golden Highway / Soweto Expressway",
      status: "EN_ROUTE",
    };
  }
}

export const logisticsAgent = new LogisticsAgentClient();

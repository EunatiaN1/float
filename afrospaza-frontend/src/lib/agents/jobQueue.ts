export interface AgentJob {
  id: string;
  type: "QUOTE_REQUEST" | "PREFLIGHT_GUARD" | "ESCROW_LOCK" | "DELIVERY_DISPATCH" | "ESCROW_FINISH";
  priority: "LOW" | "NORMAL" | "HIGH" | "CRITICAL";
  status: "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED";
  data: Record<string, any>;
  createdAt: string;
}

export class JobQueueClient {
  private jobs: AgentJob[] = [];

  public async pushJob(type: AgentJob["type"], data: Record<string, any>, priority: AgentJob["priority"] = "NORMAL"): Promise<AgentJob> {
    const job: AgentJob = {
      id: `job_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      type,
      priority,
      status: "QUEUED",
      data,
      createdAt: new Date().toISOString(),
    };
    this.jobs.push(job);
    return job;
  }

  public getJobs(): AgentJob[] {
    return this.jobs;
  }
}

export const jobQueue = new JobQueueClient();

import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

export default function DashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-64 bg-zinc-800 rounded-lg" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-28 bg-zinc-800/60 rounded-xl" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="h-64 bg-zinc-800/60 rounded-xl" />
        <div className="h-64 bg-zinc-800/60 rounded-xl" />
        <div className="h-64 bg-zinc-800/60 rounded-xl" />
      </div>
    </div>
  );
}

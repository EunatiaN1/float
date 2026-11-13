"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { Badge } from "@/components/ui/Badge";
import { truncateHash } from "@/lib/format";
import { Store, ShieldCheck, Star, MapPin, Truck, CheckCircle2, Search } from "lucide-react";
import { GlassInput } from "@/components/ui/GlassInput";

interface Seller {
  id: string;
  name: string;
  address: string;
  categories: string[];
  location: string;
  rating: number;
  ordersFulfilled: number;
  deliveryTime: string;
  verifiedXRPL: boolean;
  minOrderZAR: number;
}

const sellers: Seller[] = [
  {
    id: "sup_khayelitsha_01",
    name: "Khayelitsha Bulk Traders",
    address: "rKhayelitshaWholesaleHub9924aX8",
    categories: ["Maize & Grains", "Sugar", "Flour"],
    location: "Cape Flats Hub & Johannesburg North Depot",
    rating: 4.9,
    ordersFulfilled: 342,
    deliveryTime: "2-4 hours",
    verifiedXRPL: true,
    minOrderZAR: 2000,
  },
  {
    id: "sup_johannesburg_wholesalers",
    name: "Jozi Maize & Oil Wholesalers",
    address: "rJoziCentralWholesaleLedger71",
    categories: ["Cooking Oil", "Maize & Grains", "Rice"],
    location: "City Deep, Johannesburg, Gauteng",
    rating: 4.8,
    ordersFulfilled: 512,
    deliveryTime: "1-3 hours",
    verifiedXRPL: true,
    minOrderZAR: 1500,
  },
  {
    id: "sup_soweto_dairy",
    name: "Soweto Dairy & Bread Hub",
    address: "rSowetoLocalDairyGauteng442",
    categories: ["Dairy & Bread", "Perishables"],
    location: "Diepkloof, Soweto, Gauteng",
    rating: 4.9,
    ordersFulfilled: 289,
    deliveryTime: "45-90 mins",
    verifiedXRPL: true,
    minOrderZAR: 500,
  },
  {
    id: "sup_amalgamated_bev",
    name: "Amalgamated Beverage Distribution",
    address: "rAmalgamatedBevSA9912048A",
    categories: ["Beverages & Soft Drinks", "Energy Drinks"],
    location: "Aeroton Industrial, Johannesburg",
    rating: 4.7,
    ordersFulfilled: 418,
    deliveryTime: "3-5 hours",
    verifiedXRPL: true,
    minOrderZAR: 2500,
  },
];

export default function SellersPage() {
  const [search, setSearch] = useState("");

  const filteredSellers = sellers.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.categories.some((c) => c.toLowerCase().includes(search.toLowerCase())) ||
      s.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Vetted Supplier Directory"
        description="Every supplier in the AfroSpaza network is cryptographically verified, bound by quality covenants, and settles directly in RLUSD via XRPL."
        badge="Township Merchant Whitelist"
        actions={
          <div className="w-64">
            <GlassInput
              placeholder="Search suppliers, goods..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              prefixIcon={<Search size={14} />}
            />
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSellers.map((seller) => (
          <GlassCard key={seller.id} variant="hover" className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">{seller.name}</h3>
                  {seller.verifiedXRPL && (
                    <Badge variant="blue" size="sm">
                      XRPL Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <MapPin size={13} className="text-orange-400 shrink-0" />
                  <span>{seller.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-elevated border border-border text-xs font-bold text-amber-400">
                <Star size={13} className="fill-amber-400" />
                <span>{seller.rating}</span>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-1.5">
              {seller.categories.map((cat, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-surface-elevated text-[10px] font-semibold text-zinc-300 border border-border"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-border/60 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-surface border border-border">
                <span className="text-[10px] text-zinc-500 block">Lead Time</span>
                <span className="font-bold text-zinc-200">{seller.deliveryTime}</span>
              </div>
              <div className="p-2 rounded-lg bg-surface border border-border">
                <span className="text-[10px] text-zinc-500 block">Orders Done</span>
                <span className="font-bold text-zinc-200">{seller.ordersFulfilled}</span>
              </div>
              <div className="p-2 rounded-lg bg-surface border border-border">
                <span className="text-[10px] text-zinc-500 block">Min. Order</span>
                <span className="font-bold text-white">R{seller.minOrderZAR}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400">
              <span className="font-mono">
                XRPL: {truncateHash(seller.address, 6, 6)}
              </span>
              <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                <CheckCircle2 size={13} />
                Mandate Whitelisted
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

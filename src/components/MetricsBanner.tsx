"use client";

import React from "react";
import { Zap, ShieldCheck, Cpu, Smartphone, Activity } from "lucide-react";

export default function MetricsBanner() {
  const specs = [
    {
      value: "380ms",
      label: "Latensi Scan NFC & Barcode",
      detail: "Hardware-accelerated via CoreNFC & VisionKit",
      icon: Zap,
      color: "text-amber-400",
    },
    {
      value: "99.99%",
      label: "Enterprise Cloud Uptime",
      detail: "Global Edge Points of Presence di 34 Region",
      icon: Activity,
      color: "text-blue-400",
    },
    {
      value: "A18 Pro",
      label: "Optimasi Neural Engine",
      detail: "Inference AI on-device untuk validasi data SKU offline",
      icon: Cpu,
      color: "text-purple-400",
    },
    {
      value: "E2EE",
      label: "Secure Enclave Hardware Lock",
      detail: "Kunci kriptografi biometrik Face ID / Touch ID",
      icon: ShieldCheck,
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="w-full border-y border-white/[0.08] bg-neutral-950/60 backdrop-blur-md py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col space-y-1.5 p-4 rounded-2xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/[0.05]"
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    {item.value}
                  </span>
                </div>
                <div className="text-sm font-semibold text-neutral-200">{item.label}</div>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


"use client";

import React from "react";
import { Smartphone, Laptop, Tablet, Watch, Glasses, ArrowRight } from "lucide-react";
import { sound } from "@/utils/audio";

export default function EcosystemSection() {
  const devices = [
    {
      icon: Smartphone,
      name: "iPhone",
      role: "Field Capture & Hardware Scanner",
      desc: "Scan barcode & NFC dengan Dynamic Island dan Action Button fisik.",
      tag: "Inti Operasional",
      color: "text-blue-400",
    },
    {
      icon: Laptop,
      name: "MacBook & Mac Studio",
      role: "HQ Command & Deep Analytics",
      desc: "Dasbor performa tinggi dengan charting multi-thread dan otomasi cloud.",
      tag: "Pusat Analisis",
      color: "text-purple-400",
    },
    {
      icon: Tablet,
      name: "iPad Pro",
      role: "Warehouse POS & Kiosk Terminal",
      desc: "Layar besar Liquid Retina untuk display kasir, audit rak, dan input kurir.",
      tag: "Terminal Interaktif",
      color: "text-emerald-400",
    },
    {
      icon: Watch,
      name: "Apple Watch",
      role: "Haptic Alerts & Approval",
      desc: "Notifikasi getar lembut di pergelangan tangan untuk persetujuan stok darurat.",
      tag: "Taptic Alert",
      color: "text-amber-400",
    },
    {
      icon: Glasses,
      name: "Apple Vision Pro",
      role: "Spatial Digital Twin",
      desc: "Visualisasi 3D spasial denah gudang dan posisi rak barang secara langsung.",
      tag: "Spatial Computing",
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
            Ekosistem Terpadu
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Satu platform SaaS. Semua perangkat Apple.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Tidak ada lagi silo data antara staf lapangan dengan manajemen kantor pusat. TitanOS dirancang
            agar setiap perangkat Apple bekerja dalam harmoni yang sempurna.
          </p>
        </div>

        {/* Device Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((dev, idx) => {
            const Icon = dev.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${dev.color}`} />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      {dev.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{dev.name}</h3>
                    <div className="text-xs font-medium text-neutral-400 mt-0.5">{dev.role}</div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{dev.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 font-medium">
                  <span>Apple Swift & WebKit Native</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}

          {/* Bonus Promo Card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-gradient-to-br from-blue-950/40 via-neutral-900/60 to-purple-950/40 border-blue-500/20">
            <div className="space-y-3">
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                MDM & Apple Business Manager
              </span>
              <h3 className="text-xl font-bold text-white">Apple Fleet Provisioning</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Daftarkan ratusan iPhone dan iPad perusahaan dalam sekali sentuh melalui Apple Business
                Manager dan Zero-Touch Deployment.
              </p>
            </div>
            <a
              href="#pricing"
              onClick={() => sound.tap()}
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <span>Pelajari Integrasi Enterprise Fleet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


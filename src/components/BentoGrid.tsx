"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Scan,
  Radio,
  Layers,
  ShieldCheck,
  Zap,
  Smartphone,
  Laptop,
  CheckCircle2,
  TrendingUp,
  Cpu,
  ArrowUpRight
} from "lucide-react";
import { sound } from "@/utils/audio";

export default function BentoGrid() {
  const [activeIslandTab, setActiveIslandTab] = useState<"sales" | "scan" | "security">("sales");

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Arsitektur Kelas Apple</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Dirancang dengan presisi titanium.
            <br />
            <span className="text-apple-subtle">Ditenagai kecerdasan cloud sejati.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Setiap komponen dirancang agar terasa seperti ekstensi alami dari iOS — cepat, responsif, dan
            aman hingga ke tingkat silikon.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Dynamic Island Live Activities (Large Span 2) */}
          <div
            id="dynamic-island"
            className="md:col-span-2 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300"
          >
            <div className="space-y-3 z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Dynamic Island SDK
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  iOS 18 Native
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Live Activities langsung di genggaman.
              </h3>
              <p className="text-sm text-neutral-400 max-w-xl leading-relaxed">
                Pantau pergerakan omzet bisnis, status scanning barcode di gudang, dan notifikasi kritis
                langsung di Dynamic Island tanpa perlu membuka aplikasi secara terus-menerus.
              </p>
            </div>

            {/* Interactive Dynamic Island Showcase Box */}
            <div className="mt-8 p-5 rounded-2xl bg-black/60 border border-white/10 z-10 space-y-4">
              {/* Island Preview Pill */}
              <div className="bg-black border border-neutral-700 rounded-3xl p-3.5 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    {activeIslandTab === "sales" && <TrendingUp className="w-4 h-4" />}
                    {activeIslandTab === "scan" && <Scan className="w-4 h-4 text-emerald-400" />}
                    {activeIslandTab === "security" && <ShieldCheck className="w-4 h-4 text-purple-400" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {activeIslandTab === "sales" && "ARR Surge: +$1,250 (Tokyo Hub)"}
                      {activeIslandTab === "scan" && "NFC Tag Verified: 64 Pallets Inbound"}
                      {activeIslandTab === "security" && "Face ID Verified: Admin Session Open"}
                    </div>
                    <div className="text-[10px] text-neutral-400">
                      {activeIslandTab === "sales" && "3 menit yang lalu • Stripe via Apple Pay"}
                      {activeIslandTab === "scan" && "Scanner Unit #04 • Akurasi 100%"}
                      {activeIslandTab === "security" && "Secure Enclave Hardware Handshake OK"}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live
                  </span>
                </div>
              </div>

              {/* Selector Tabs for Preview */}
              <div className="flex gap-2 justify-center">
                {[
                  { id: "sales", label: "Penjualan Live" },
                  { id: "scan", label: "Scanner Inventaris" },
                  { id: "security", label: "Biometric Enclave" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      sound.tap();
                      setActiveIslandTab(tab.id as typeof activeIslandTab);
                    }}
                    className={`text-xs px-3 py-1.5 rounded-full transition-all font-medium ${
                      activeIslandTab === tab.id
                        ? "bg-white text-black shadow-sm"
                        : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Card 2: Action Button Automation */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Action Button
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Satu tombol fisik. Ribuan workflow.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Petakan Tombol Tindakan (Action Button) di iPhone 15 & 16 Pro untuk memicu audit kilat,
                scan barcode continuous, atau kirim alert darurat.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-neutral-900/80 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                <div className="w-3 h-3 rounded bg-amber-400/30 border border-amber-400/50" />
                <span>Tekan & Tahan Action Button:</span>
              </div>
              <div className="text-xs font-semibold text-white bg-black/60 p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                <span>⚡ Quick Scan Mode</span>
                <span className="text-[10px] text-amber-400 font-mono">0.1s Trigger</span>
              </div>
            </div>
          </div>

          {/* Card 3: Barcode & NFC Hardware Engine */}
          <div
            id="hardware-engine"
            className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <Scan className="w-3.5 h-3.5" /> Hardware Engine
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Sensor NFC & Barcode Instan.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Membaca QR, EAN-13, DataMatrix, Code 128, dan Tag NFC NTAG213/215/216 tanpa hardware eksternal
                tambahan.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-2xl bg-neutral-950 border border-white/10 font-mono text-[11px] space-y-1.5 text-neutral-400">
              <div className="flex justify-between text-neutral-300">
                <span>CORE_NFC_ISO14443</span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>VISION_KIT_BARCODE</span>
                <span className="text-emerald-400">READY</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>HAPTIC_ENGINE</span>
                <span className="text-blue-400">SYNCED</span>
              </div>
            </div>
          </div>

          {/* Card 4: Continuity & Apple Ecosystem Sync (Span 2) */}
          <div className="md:col-span-2 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div className="space-y-3 z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold flex items-center gap-1.5">
                  <Laptop className="w-3.5 h-3.5" /> Zero-Latency Handoff
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Universal Clipboard
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Mulai di iPhone. Lanjutkan di MacBook Pro.
              </h3>
              <p className="text-sm text-neutral-400 max-w-xl leading-relaxed">
                Scan barcode di gudang dengan iPhone, lalu buka laporan analisis mendalam di Mac Anda tanpa
                menekan tombol refresh. Sinkronisasi terenkripsi end-to-end dalam hitungan milidetik.
              </p>
            </div>

            {/* Visual Continuity Demo */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 z-10">
              <div className="p-4 rounded-2xl bg-neutral-900/70 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Smartphone className="w-4 h-4 text-blue-400" /> iPhone 16 Pro (Field Capture)
                </div>
                <div className="text-[11px] text-neutral-400">
                  Scan 150 item via NFC & Barcode dengan verifikasi haptic feedback instan.
                </div>
                <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> 150/150 Diunggah ke Cloud
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/70 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Laptop className="w-4 h-4 text-purple-400" /> Mac & Web Dashboard (HQ)
                </div>
                <div className="text-[11px] text-neutral-400">
                  Data langsung muncul di monitor HQ dengan kalkulasi forecasting otomatis.
                </div>
                <div className="text-[10px] font-mono text-blue-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 0ms Latensi Sinkronisasi
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}


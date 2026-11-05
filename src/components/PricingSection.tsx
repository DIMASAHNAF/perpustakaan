"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { sound } from "@/utils/audio";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Titan Pro",
      badge: "Untuk Solo & Spesialis",
      desc: "Ideal untuk toko independen, kurir, dan teknisi lapangan yang membutuhkan satu iPhone tangguh.",
      priceMonthly: 29,
      priceAnnual: 24,
      isPopular: false,
      features: [
        "1 Lisensi iPhone 15 / 16 Pro",
        "Engine Barcode & QR Code standar",
        "Dukungan NFC Tag NTAG213/215",
        "Dynamic Island Live Activities",
        "1,000 Scan per hari",
        "Export CSV & PDF harian",
        "Dukungan Komunitas & Email",
      ],
      cta: "Mulai Uji Coba Pro",
    },
    {
      name: "Titan Pro Max",
      badge: "Paling Populer • Pilihan Keynote",
      desc: "Dirancang untuk gudang, armada logistik, dan tim retail yang memerlukan kolaborasi instan.",
      priceMonthly: 79,
      priceAnnual: 64,
      isPopular: true,
      features: [
        "Hingga 15 iPhone & iPad Armada",
        "CoreNFC Lanjutan + Continuous Multi-Scan",
        "Otomasi Tombol Action Button kustom",
        "Zero-Latency Handoff ke MacBook Pro",
        "Apple Intelligence Anomaly Detection",
        "Scan Tak Terbatas (Unlimited)",
        "Passkey Biometrik & Secure Enclave",
        "Prioritas SLA Dukungan Teknis 99.99%",
      ],
      cta: "Mulai Uji Coba Pro Max",
    },
    {
      name: "Enterprise Ultra",
      badge: "Skala Korporasi",
      desc: "Integrasi skala besar dengan integrasi MDM, Apple Business Manager, dan arsitektur custom.",
      priceMonthly: 199,
      priceAnnual: 159,
      isPopular: false,
      features: [
        "Armada iPhone, iPad & Apple Watch Tanpa Batas",
        "Apple Business Manager Zero-Touch MDM",
        "Spatial Warehouse Digital Twin (Vision Pro)",
        "Integrasi Langsung SAP, NetSuite & Odoo ERP",
        "Kepatuhan SOC2 Type II & On-Prem Enclave",
        "SLA Respon < 15 Menit 24/7",
        "Dedicated Apple Systems Architect",
        "Kontrak B2B & Faktur Pajak Resmi",
      ],
      cta: "Hubungi Tim Enterprise",
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
            Investasi Transparan
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Pilih paket yang sesuai untuk skala armada Anda.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Semua paket mencakup uji coba gratis 14 hari tanpa kartu kredit. Anda dapat meng-upgrade,
            men-downgrade, atau membatalkan langganan kapan saja.
          </p>

          {/* Billing Switcher */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span
              className={`text-xs font-medium cursor-pointer ${
                billingCycle === "monthly" ? "text-white" : "text-neutral-500"
              }`}
              onClick={() => {
                sound.tap();
                setBillingCycle("monthly");
              }}
            >
              Bulanan
            </span>
            <button
              onClick={() => {
                sound.tap();
                setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly");
              }}
              className="w-12 h-6 rounded-full bg-neutral-800 p-1 flex items-center transition-colors relative border border-white/10"
              aria-label="Toggle Billing Cycle"
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  billingCycle === "annual" ? "translate-x-6 bg-blue-500" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-xs font-medium cursor-pointer flex items-center gap-1.5 ${
                billingCycle === "annual" ? "text-white" : "text-neutral-500"
              }`}
              onClick={() => {
                sound.tap();
                setBillingCycle("annual");
              }}
            >
              Tahunan
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                Hemat 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? "bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 border-2 border-blue-500/80 shadow-[0_0_50px_rgba(41,151,255,0.25)] scale-105 z-10"
                    : "glass-panel border-white/[0.08] hover:border-white/20"
                }`}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-semibold tracking-wide shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Paling Direkomendasikan
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">{plan.name}</h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{plan.desc}</p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-white/5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        ${price}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">/ bulan / pengguna</span>
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-1">
                      {billingCycle === "annual" ? "Ditagih tahunan (Save $180/thn)" : "Ditagih bulanan fleksibel"}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    <div className="text-xs font-semibold text-neutral-300">Fitur yang Disertakan:</div>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <a
                    href="#cta"
                    onClick={() => sound.tap()}
                    className={`w-full py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 active:scale-95"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/10 active:scale-95"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


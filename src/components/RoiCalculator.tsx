"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { sound } from "@/utils/audio";

export default function RoiCalculator() {
  const [deviceCount, setDeviceCount] = useState(15);
  const [scansPerDay, setScansPerDay] = useState(250);

  // Calculations:
  // Traditional manual entry takes ~15 seconds per item.
  // TitanOS takes ~0.5 seconds per item.
  // Seconds saved per scan = 14.5 seconds.
  const totalScansMonth = deviceCount * scansPerDay * 24; // 24 working days
  const secondsSavedMonth = totalScansMonth * 14.5;
  const hoursSavedMonth = Math.round(secondsSavedMonth / 3600);
  // Assuming average labor cost of $18/hour
  const estimatedSavingsUsd = Math.round(hoursSavedMonth * 18);
  const estimatedSavingsIdr = (estimatedSavingsUsd * 16000).toLocaleString("id-ID");

  return (
    <section className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator ROI Enterprise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hitung efisiensi biaya & waktu tim Anda.
          </h2>
          <p className="text-sm text-neutral-400">
            Lihat berapa banyak jam kerja manual dan anggaran operasional yang dapat dihemat setiap bulan.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Sliders Area (7 cols) */}
          <div className="md:col-span-7 space-y-6">
            {/* Slider 1: Jumlah iPhone */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-300 font-medium">Jumlah iPhone Armada / Staf:</span>
                <span className="font-mono font-bold text-blue-400">{deviceCount} Perangkat</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={deviceCount}
                onChange={(e) => {
                  sound.tap();
                  setDeviceCount(Number(e.target.value));
                }}
                className="w-full accent-blue-500 h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>1 Device</span>
                <span>50 Devices</span>
                <span>100 Devices</span>
              </div>
            </div>

            {/* Slider 2: Scan per hari */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-300 font-medium">Rata-rata Scan per Perangkat / Hari:</span>
                <span className="font-mono font-bold text-emerald-400">{scansPerDay} Scan</span>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={scansPerDay}
                onChange={(e) => {
                  sound.tap();
                  setScansPerDay(Number(e.target.value));
                }}
                className="w-full accent-emerald-500 h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>20 Scan</span>
                <span>500 Scan</span>
                <span>1,000 Scan</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 space-y-1.5 text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Otomatisasi Validasi Real-time</span>
              </div>
              <p>
                Menghilangkan kesalahan ketik manual SKU, duplikasi data, dan ketidaksesuaian fisik vs
                sistem hingga 99.4%.
              </p>
            </div>
          </div>

          {/* Result Card (5 cols) */}
          <div className="md:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-white/10 space-y-6 text-center md:text-left">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                Estimasi Penghematan Bulanan
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                ${estimatedSavingsUsd.toLocaleString()}
                <span className="text-xs text-neutral-400 font-normal ml-1">/bulan</span>
              </div>
              <div className="text-xs font-mono text-emerald-400 mt-1">
                ≈ Rp {estimatedSavingsIdr} IDR / bulan
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" /> Waktu Kerja Dihemat:
                </span>
                <span className="font-bold text-white font-mono">{hoursSavedMonth} Jam / bln</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Peningkatan Akurasi:
                </span>
                <span className="font-bold text-emerald-400 font-mono">99.4% Valid</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-amber-400" /> Payback Period:
                </span>
                <span className="font-bold text-white font-mono">&lt; 14 Hari</span>
              </div>
            </div>

            <a
              href="#pricing"
              onClick={() => sound.tap()}
              className="block w-full py-2.5 rounded-full bg-white text-black font-semibold text-xs text-center hover:bg-neutral-200 transition-colors shadow-md"
            >
              Klaim Penghematan Anda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import React, { useState } from "react";
import { ArrowRight, Play, Sparkles, Shield, Cpu, Zap, Check } from "lucide-react";
import IPhoneMockup, { TitaniumColor } from "./IPhoneMockup";
import { sound } from "@/utils/audio";

export default function Hero() {
  const [selectedColor, setSelectedColor] = useState<TitaniumColor>("natural");
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const colors: { id: TitaniumColor; name: string; hex: string; bgClass: string }[] = [
    { id: "natural", name: "Natural Titanium", hex: "#9b968f", bgClass: "bg-[#9b968f]" },
    { id: "desert", name: "Desert Titanium", hex: "#c9a383", bgClass: "bg-[#c9a383]" },
    { id: "white", name: "White Titanium", hex: "#e3e4e5", bgClass: "bg-[#e3e4e5]" },
    { id: "black", name: "Black Titanium", hex: "#2f3032", bgClass: "bg-[#2f3032]" },
  ];

  return (
    <section id="overview" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Lighting & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Keynote Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.12] backdrop-blur-xl text-xs font-medium text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="tracking-wide">TitanOS 18 • Dirancang Khusus untuk iPhone 16 Pro</span>
            <span className="text-white/40">|</span>
            <span className="text-blue-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> SwiftCore Engine
            </span>
          </div>

          {/* Keynote Big Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            The Cloud Operating System.
            <br />
            <span className="text-apple-gradient">Reimagined for iPhone.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#86868b] max-w-2xl mx-auto font-normal leading-relaxed">
            Satukan kekuatan komputasi cloud tingkat enterprise dengan sensor NFC & Barcode instan,
            pemantauan <strong>Dynamic Island</strong> live, dan keamanan biometrik Secure Enclave.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="#pricing"
              onClick={() => sound.tap()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#e8e8ed] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] active:scale-95"
            >
              <span>Mulai Uji Coba Gratis</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                sound.pop();
                setDemoModalOpen(true);
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/[0.07] hover:bg-white/[0.12] text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-white/10 active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Tonton Keynote Demo</span>
            </button>
          </div>

          {/* Highlights checklist */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-3 text-xs text-[#86868b]">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-400" /> Tanpa Kartu Kredit
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-400" /> 14 Hari Akses Penuh
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-400" /> Siap Deploy iOS 18 & iPadOS
            </span>
          </div>

          {/* Interactive Titanium Finish Selector */}
          <div className="pt-6 flex flex-col items-center gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Pilih Finish Titanium: <strong className="text-white capitalize">{selectedColor}</strong>
            </span>
            <div className="flex items-center gap-3 p-1.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-md">
              {colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    sound.tap();
                    setSelectedColor(c.id);
                  }}
                  title={c.name}
                  className={`w-7 h-7 rounded-full ${c.bgClass} transition-transform duration-200 flex items-center justify-center relative ${
                    selectedColor === c.id
                      ? "ring-2 ring-blue-500 scale-110 shadow-lg"
                      : "opacity-70 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  {selectedColor === c.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Centerpiece: Interactive iPhone Device */}
        <div className="mt-10 sm:mt-14">
          <IPhoneMockup finishColor={selectedColor} />
        </div>
      </div>

      {/* Keynote Demo Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-neutral-950 border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-neutral-300 ml-2">TitanOS Keynote Reveal (Special Event)</span>
              </div>
              <button
                onClick={() => {
                  sound.tap();
                  setDemoModalOpen(false);
                }}
                className="text-xs text-neutral-400 hover:text-white px-2 py-1 rounded bg-neutral-900 border border-white/10"
              >
                Tutup ✕
              </button>
            </div>

            <div className="aspect-video bg-neutral-900 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/5 relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-3 animate-pulse">
                <Play className="w-8 h-8 fill-blue-400 ml-1" />
              </div>
              <h3 className="text-lg font-bold text-white">Apple Enterprise Innovation Showcase</h3>
              <p className="text-xs text-neutral-400 max-w-md mt-1">
                Pelajari bagaimana TitanOS menghubungkan sensor NFC/Barcode iPhone dengan arsitektur cloud terdistribusi untuk memotong waktu audit inventaris hingga 80%.
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    sound.tap();
                    setDemoModalOpen(false);
                    const el = document.getElementById("hardware-engine");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200"
                >
                  Jelajahi Fitur Barcode & NFC
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


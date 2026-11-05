"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Apple, Sparkles } from "lucide-react";
import { sound } from "@/utils/audio";

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    sound.scanSuccess();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[40px] p-8 sm:p-14 bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-black border border-white/15 shadow-[0_0_80px_rgba(0,0,0,0.8)] text-center space-y-8 relative overflow-hidden">
          {/* Subtle Apple watermark logo */}
          <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none">
            <Apple className="w-64 h-64 text-white fill-white" />
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Onboarding Instan Tanpa Setup Server</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Bawa presisi Apple ke seluruh operasional bisnis Anda.
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Mulai uji coba gratis 14 hari hari ini. Hubungkan iPhone staf Anda dalam 60 detik dan rasakan
              lompatan kecepatan scan barcode & sinkronisasi cloud.
            </p>
          </div>

          {/* Interactive Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email kerja Anda..."
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                onClick={() => sound.tap()}
                className="px-6 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-[#e8e8ed] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 shrink-0"
              >
                <span>Mulai Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 max-w-md mx-auto flex items-center justify-center gap-2 text-emerald-400 text-sm font-semibold animate-in fade-in duration-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Undangan Onboarding telah dikirim ke {email}! Silakan cek inbox Anda.</span>
            </div>
          )}

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> 14 Hari Akses Penuh
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Tanpa Kartu Kredit
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Integrasi Apple MDM Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


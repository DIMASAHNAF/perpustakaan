"use client";

import React from "react";
import { Star, Quote, Building2, ShieldCheck } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "“Beralih dari pemindai industri berat yang mahal ke iPhone 16 Pro dengan TitanOS menghemat belanja perangkat keras kami sebesar $120.000 di 35 toko ritel kami. Dynamic Island-nya membuat staf gudang kami bekerja jauh lebih santai dan fokus.”",
      author: "Raditya Prasetya",
      title: "VP of Supply Chain & Logistics",
      company: "Aura Luxury Retail Group",
      devices: "140+ iPhone 16 Pro Terpasang",
    },
    {
      quote:
        "“Kecepatan scan NFC dan barcode-nya luar biasa—kurang dari 400 milidetik per palet. Integrasi Handoff langsung ke MacBook Pro di kantor pusat membuat kami memiliki visibilitas stok real-time tanpa penundaan batch akhir hari.”",
      author: "Samantha Lin",
      title: "Head of Warehouse Operations",
      company: "Nexus Global Fulfillment",
      devices: "420+ Unit iOS Fleet",
    },
    {
      quote:
        "“Keamanan biometrik Face ID yang terhubung ke Secure Enclave memastikan otentikasi staf lapangan kami memenuhi standar audit SOC2 tanpa kerepotan membawa token fisik atau mengingat password rumit.”",
      author: "Hendrik Van Der Meer",
      title: "Chief Information Security Officer",
      company: "Kinetix Pharma Logistics",
      devices: "Enterprise Ultra Deployment",
    },
  ];

  return (
    <section className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
            Kisah Sukses Nyata
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Dipercaya oleh tim logistik & ritel terdepan.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Lihat bagaimana perusahaan modern menggantikan scanner barcode kuno dengan kekuatan ekosistem Apple.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="glass-panel rounded-3xl p-7 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  {rev.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <div>
                  <div className="text-sm font-bold text-white">{rev.author}</div>
                  <div className="text-xs text-neutral-400">{rev.title}</div>
                  <div className="text-xs text-blue-400 font-medium">{rev.company}</div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 text-[10px] font-mono text-neutral-300 border border-white/5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>{rev.devices}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


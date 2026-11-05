"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { sound } from "@/utils/audio";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Model iPhone dan versi iOS apa saja yang didukung oleh TitanOS?",
      a: "TitanOS mendukung semua iPhone mulai dari iPhone 11 hingga iPhone 16 Pro dan seri teranyar yang menjalankan iOS 16 atau yang lebih baru. Fitur Dynamic Island Live Activities dioptimalkan untuk iPhone 14 Pro, 15 series, dan 16 series, sedangkan shortcut tombol fisik Action Button didukung penuh pada iPhone 15 Pro dan 16 series.",
    },
    {
      q: "Bagaimana cara kerja scanner Barcode & NFC tanpa hardware tambahan?",
      a: "TitanOS memanfaatkan framework native Apple yaitu CoreNFC (untuk membaca frekuensi radio tag NFC ISO/IEC 14443 & NTAG) serta VisionKit (yang memanfaatkan sensor kamera high-res dan Neural Engine untuk mendeteksi barcode 1D dan matriks 2D). Anda tidak perlu membeli sled scanner genggam yang mahal.",
    },
    {
      q: "Apakah aplikasi tetap dapat digunakan jika sinyal internet di gudang terputus (Offline Mode)?",
      a: "Ya! TitanOS dibangun dengan filosofi Local-First Architecture. Seluruh data pemindaian disimpan secara aman dalam basis data lokal terenkripsi di iPhone Anda. Begitu perangkat mendapatkan koneksi Wi-Fi atau seluler 5G, data akan disinkronkan otomatis ke cloud tanpa risiko data ganda atau hilang.",
    },
    {
      q: "Bagaimana jika iPhone staf lapangan hilang atau dicuri?",
      a: "Melalui integrasi Apple Business Manager dan MDM (Mobile Device Management), administrator dapat mengunci perangkat dan melakukan Remote Zero-Touch Data Wipe seketika. Selain itu, kunci kriptografi disimpan di Secure Enclave sehingga data tidak dapat diekstrak secara fisik.",
    },
    {
      q: "Dapatkah TitanOS diintegrasikan dengan sistem ERP atau backend kami?",
      a: "Tentu saja. TitanOS menyediakan RESTful API lengkap, Webhooks event-driven, serta integrasi bawaan dengan sistem ERP terkemuka seperti SAP, Oracle NetSuite, Odoo, Shopify Plus, dan database SQL/NoSQL kustom.",
    },
  ];

  const toggleAccordion = (idx: number) => {
    sound.tap();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" /> Pertanyaan yang Sering Diajukan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Semua yang perlu Anda ketahui tentang TitanOS.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl overflow-hidden border border-white/[0.08] transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


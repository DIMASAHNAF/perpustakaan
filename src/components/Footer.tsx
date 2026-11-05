"use client";

import React from "react";
import { Apple, Globe, Heart } from "lucide-react";
import { sound } from "@/utils/audio";

export default function Footer() {
  const footerLinks = {
    Produk: [
      { name: "Overview TitanOS", href: "#overview" },
      { name: "Dynamic Island SDK", href: "#dynamic-island" },
      { name: "Barcode & NFC Engine", href: "#hardware-engine" },
      { name: "Pricing & Paket", href: "#pricing" },
      { name: "Changelog iOS 18", href: "#" },
    ],
    Teknologi: [
      { name: "CoreNFC Framework", href: "#" },
      { name: "VisionKit Barcode OCR", href: "#" },
      { name: "Apple Silicon A18 Pro", href: "#" },
      { name: "Secure Enclave HSM", href: "#" },
      { name: "Continuity Cloud API", href: "#" },
    ],
    Ekosistem: [
      { name: "TitanOS for iPhone", href: "#" },
      { name: "TitanOS for Mac", href: "#" },
      { name: "TitanOS for iPad", href: "#" },
      { name: "Apple Watch Haptics", href: "#" },
      { name: "Vision Pro Spatial Ops", href: "#" },
    ],
    Perusahaan: [
      { name: "Tentang TitanOS", href: "#" },
      { name: "Apple Partner Program", href: "#" },
      { name: "Karir & Engineering", href: "#" },
      { name: "Pusat Bantuan & Dok", href: "#" },
      { name: "Kontak Tim Enterprise", href: "#" },
    ],
    Legal: [
      { name: "Kebijakan Privasi", href: "#" },
      { name: "Syarat Layanan", href: "#" },
      { name: "Kepatuhan SOC2 & GDPR", href: "#" },
      { name: "Keamanan Enkripsi", href: "#" },
    ],
  };

  return (
    <footer className="w-full bg-[#08080a] text-neutral-400 text-xs border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h4 className="text-xs font-semibold text-white tracking-wide">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      onClick={() => sound.tap()}
                      className="hover:text-white transition-colors duration-150"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Apple Disclaimer */}
        <div className="pt-8 border-t border-white/[0.06] text-[11px] text-neutral-500 leading-relaxed space-y-2">
          <p>
            * Hasil performa kecepatan scan 380ms diukur pada perangkat iPhone 16 Pro yang menjalankan iOS 18 dengan
            pencahayaan standar gudang. Uji coba gratis 14 hari tidak memerlukan informasi kartu kredit dan dapat dibatalkan
            kapan saja tanpa penalti.
          </p>
          <p>
            Apple, logo Apple, iPhone, Dynamic Island, Face ID, iPad, MacBook Pro, Apple Watch, dan Apple Vision Pro adalah
            merek dagang terdaftar milik Apple Inc. di Amerika Serikat dan negara-negara lain. TitanOS adalah platform
            perangkat lunak independen yang dioptimalkan untuk perangkat Apple.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div className="flex items-center gap-2">
            <Apple className="w-3.5 h-3.5 text-neutral-400" />
            <span>© 2026 TitanOS Systems Inc. Hak cipta dilindungi undang-undang.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => sound.tap()}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Indonesia (Bahasa)</span>
            </button>
            <span>•</span>
            <a href="#overview" className="hover:text-white transition-colors">
              Kembali ke Atas ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


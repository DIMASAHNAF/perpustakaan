"use client";

import React, { useState } from "react";
import {
  Scan,
  Radio,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Fingerprint
} from "lucide-react";
import { sound } from "@/utils/audio";

export default function FeatureDeepDive() {
  const [activeTab, setActiveTab] = useState<"scanner" | "ai" | "security">("scanner");

  // Scanner interactive demo state
  const [selectedFormat, setSelectedFormat] = useState<"EAN13" | "QR" | "NFC">("EAN13");
  const [scanStatus, setScanStatus] = useState<"idle" | "scanning" | "success">("idle");
  const [scannedData, setScannedData] = useState<{
    id: string;
    product: string;
    category: string;
    stock: number;
    location: string;
  }>({
    id: "8992-7610-0411",
    product: "iPhone 16 Pro Max 256GB - Natural Titanium",
    category: "Smartphones & Hardware",
    stock: 42,
    location: "Gudang Utama - Rak A12",
  });

  const handleTestScan = (format: "EAN13" | "QR" | "NFC") => {
    sound.tap();
    setSelectedFormat(format);
    setScanStatus("scanning");
    setTimeout(() => {
      sound.scanSuccess();
      setScanStatus("success");
      if (format === "EAN13") {
        setScannedData({
          id: "8992-7610-0411",
          product: "iPhone 16 Pro Max 256GB - Natural Titanium",
          category: "Smartphones & Hardware",
          stock: 42,
          location: "Gudang Utama - Rak A12",
        });
      } else if (format === "QR") {
        setScannedData({
          id: "QR-BATCH-2026-X99",
          product: "Pallet MagSafe Chargers & USB-C Cables",
          category: "Accessories & Peripherals",
          stock: 320,
          location: "Inbound Docks - Bay 3",
        });
      } else {
        setScannedData({
          id: "NTAG-215-ENCLAVE-88",
          product: "Secure Asset Tag - Mac Studio Fleet Node",
          category: "Enterprise Infrastructure",
          stock: 12,
          location: "Server Room B - Rack 04",
        });
      }
    }, 700);
  };

  return (
    <section className="py-24 border-t border-white/[0.08] relative bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Deep Dive Teknologi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
              Eksplorasi Fitur Inti TitanOS
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-neutral-900 border border-white/10">
            {[
              { id: "scanner", label: "Scanner Sandbox", icon: Scan },
              { id: "ai", label: "Apple Intelligence", icon: Cpu },
              { id: "security", label: "Secure Enclave", icon: ShieldCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sound.tap();
                    setActiveTab(tab.id as typeof activeTab);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-black shadow-md"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: SCANNER SANDBOX */}
        {activeTab === "scanner" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Simulasi Pemindai Hardware Multi-Format
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                TitanOS menggabungkan <strong>CoreNFC</strong> dan <strong>VisionKit</strong> untuk
                mengenali barcode dan tag frekuensi tinggi secara instan. Coba pilih format di bawah dan
                saksikan respons pemindaian real-time.
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-neutral-500">Pilih Tipe Tag/Kode:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleTestScan("EAN13")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                      selectedFormat === "EAN13"
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-neutral-900 border-white/10 text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Scan className="w-3.5 h-3.5" />
                    EAN-13 Barcode
                  </button>

                  <button
                    onClick={() => handleTestScan("QR")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                      selectedFormat === "QR"
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-neutral-900 border-white/10 text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Scan className="w-3.5 h-3.5" />
                    QR Matrix Code
                  </button>

                  <button
                    onClick={() => handleTestScan("NFC")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                      selectedFormat === "NFC"
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-neutral-900 border-white/10 text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Radio className="w-3.5 h-3.5" />
                    NFC Tag (NTAG215)
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleTestScan(selectedFormat)}
                  disabled={scanStatus === "scanning"}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${scanStatus === "scanning" ? "animate-spin" : ""}`} />
                  <span>Uji Pindai Sekali Lagi</span>
                </button>
              </div>
            </div>

            {/* Interactive Scanner Output Display */}
            <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    CoreNFC & Vision Engine Status: SIAP
                  </span>
                </div>
                <span className="text-xs text-neutral-400 font-mono">
                  Format Aktif: <strong>{selectedFormat}</strong>
                </span>
              </div>

              {/* Scanned Card */}
              <div className="p-5 rounded-2xl bg-neutral-900/90 border border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                      Identifikasi Aset
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">{scannedData.product}</h4>
                  </div>
                  <div className="self-start sm:self-center">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Terverifikasi
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/5 text-xs">
                  <div>
                    <div className="text-neutral-500 text-[10px]">Kode Tag / SKU</div>
                    <div className="font-mono font-semibold text-white mt-0.5">{scannedData.id}</div>
                  </div>
                  <div>
                    <div className="text-neutral-500 text-[10px]">Kategori</div>
                    <div className="font-medium text-neutral-300 mt-0.5">{scannedData.category}</div>
                  </div>
                  <div>
                    <div className="text-neutral-500 text-[10px]">Sisa Stok Gudang</div>
                    <div className="font-semibold text-emerald-400 mt-0.5">{scannedData.stock} Unit</div>
                  </div>
                  <div>
                    <div className="text-neutral-500 text-[10px]">Lokasi Fisik</div>
                    <div className="font-medium text-neutral-300 mt-0.5">{scannedData.location}</div>
                  </div>
                </div>
              </div>

              {/* Real-time sync feedback */}
              <div className="flex items-center justify-between text-xs text-neutral-400 px-1 font-mono">
                <span>Sinkronisasi Cloud Terenkripsi: 100% Selesai</span>
                <span className="text-blue-400">0ms Antrean</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: APPLE INTELLIGENCE */}
        {activeTab === "ai" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Apple Intelligence & On-Device ML
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Memanfaatkan Neural Engine 16-core di chip A18 Pro untuk membaca barcode buram,
                mendeteksi anomali stok, dan memberikan prediksi pengadaan inventaris secara otomatis
                tanpa mengirim data sensitif ke server publik pihak ketiga.
              </p>
              <div className="space-y-2 pt-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Koreksi otomatis barcode sobek atau kotor menggunakan VisionKit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Private Cloud Compute untuk analitik bisnis skala besar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Prediksi restock otomatis berdasarkan tren musiman</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-bold text-white">Neural Engine Telemetry Insight</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  On-Device CoreML
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Anomali Pengiriman Terdeteksi & Terpecahkan</h5>
                    <p className="text-xs text-neutral-400 mt-1">
                      Batch barcode #8409 mengalami selisih 2 unit di dermaga muat; AI secara otomatis
                      mencocokkan log scan NFC sopir dan memperbarui manifes gudang.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Rekomendasi Restock Otomatis</h5>
                    <p className="text-xs text-neutral-400 mt-1">
                      Diproyeksikan 18 SKU akan habis dalam 72 jam ke depan akibat kenaikan pesanan B2B. PO
                      draf telah disiapkan untuk otorisasi sekali klik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: SECURE ENCLAVE */}
        {activeTab === "security" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Keamanan Tingkat Perangkat Keras: Secure Enclave
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                TitanOS tidak pernah menyimpan password teks biasa. Kunci enkripsi sesi pengguna diisolasi
                dalam koprosesor Secure Enclave iPhone dan dilindungi oleh otentikasi biometrik Face ID.
              </p>
              <div className="space-y-2 pt-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-emerald-400" />
                  <span>Dukungan penuh Passkeys & FIDO2 WebAuthn</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Enkripsi AES-256 GCM pada data bergerak & diam</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Sesuai standar kepatuhan SOC2 Type II, ISO 27001, & GDPR</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white">Biometric Passkey Handshake</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Hardware Enclave Protected
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-white/5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-neutral-400">
                  <span>CRYPTO_CHIP:</span>
                  <span className="text-white">Apple Secure Enclave A18</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>KEY_STORAGE:</span>
                  <span className="text-emerald-400">Non-Exportable Hardware HSM</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>BIOMETRIC_AUTH:</span>
                  <span className="text-emerald-400">Face ID TrueDepth Camera Active</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>REMOTE_WIPE:</span>
                  <span className="text-blue-400">MDM Instant Zero-Data Purge Ready</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


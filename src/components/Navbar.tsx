"use client";

import React, { useState } from "react";
import { Apple, Sparkles, Menu, X, ArrowRight, ShieldCheck, Smartphone } from "lucide-react";
import { sound } from "@/utils/audio";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Dynamic Island", href: "#dynamic-island" },
    { label: "NFC & Barcode", href: "#hardware-engine" },
    { label: "Bento Features", href: "#features" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-black/70 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          onClick={() => sound.tap()}
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-colors">
            <Apple className="w-4 h-4 text-white fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
              TitanOS <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">iOS 18</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] text-[#86868b] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.tap()}
              className="hover:text-white transition-colors duration-150 relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#pricing"
            onClick={() => sound.tap()}
            className="text-xs text-[#86868b] hover:text-white px-3 py-1.5 transition-colors font-medium"
          >
            Sign In
          </a>
          <a
            href="#cta"
            onClick={() => sound.tap()}
            className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-[#e8e8ed] transition-all duration-200 flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-95"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => {
              sound.tap();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-1.5 text-[#86868b] hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-black/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                sound.tap();
                setMobileMenuOpen(false);
              }}
              className="text-sm font-medium text-[#86868b] hover:text-white py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <a
              href="#pricing"
              onClick={() => {
                sound.tap();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2 text-sm text-[#86868b] hover:text-white"
            >
              Sign In
            </a>
            <a
              href="#cta"
              onClick={() => {
                sound.tap();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 text-sm font-medium rounded-full bg-white text-black hover:bg-[#e8e8ed]"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


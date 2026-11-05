"use client";

import React, { useState, useEffect } from "react";
import {
  Wifi,
  Battery,
  Scan,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Bell,
  RefreshCw,
  Radio,
  BarChart3,
  Sliders,
  Play,
  Volume2,
  Smartphone
} from "lucide-react";
import { sound } from "@/utils/audio";

export type TitaniumColor = "natural" | "desert" | "white" | "black";

interface IPhoneMockupProps {
  finishColor?: TitaniumColor;
}

export default function IPhoneMockup({ finishColor = "natural" }: IPhoneMockupProps) {
  // Dynamic island states: 'compact' | 'expanded'
  const [islandExpanded, setIslandExpanded] = useState(false);
  const [islandMode, setIslandMode] = useState<"metrics" | "scan" | "ai" | "call">("metrics");

  // Phone screen active view: 'dashboard' | 'scanner' | 'devices' | 'telemetry'
  const [activeScreen, setActiveScreen] = useState<"dashboard" | "scanner" | "devices" | "telemetry">("dashboard");

  // Scanner simulation state
  const [isScanning, setIsScanning] = useState(false);
  const [lastScanResult, setLastScanResult] = useState<{
    code: string;
    type: "BARCODE" | "NFC";
    name: string;
    status: string;
    timestamp: string;
  } | null>({
    code: "899276100411",
    type: "BARCODE",
    name: "iPhone 16 Pro Max - 512GB Natural",
    status: "Verified & Assigned to Fleet A",
    timestamp: "Just now",
  });

  // Clock
  const [currentTime, setCurrentTime] = useState("09:41");

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const hours = d.getHours().toString().padStart(2, "0");
      const minutes = d.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const triggerScan = (type: "BARCODE" | "NFC") => {
    sound.tap();
    setIsScanning(true);
    setTimeout(() => {
      sound.scanSuccess();
      setIsScanning(false);
      setLastScanResult({
        code: type === "BARCODE" ? "SKU-99042-" + Math.floor(1000 + Math.random() * 9000) : "NFC-TAG-A" + Math.floor(100 + Math.random() * 900),
        type,
        name: type === "BARCODE" ? "MagSafe Fleet Unit #084" : "Asset Tag - Warehouse Bay 4",
        status: "Active • Secure Enclave Sync Verified",
        timestamp: "Just now",
      });
      // also flash dynamic island
      setIslandMode("scan");
      setIslandExpanded(true);
    }, 1100);
  };

  const toggleIsland = () => {
    sound.pop();
    setIslandExpanded(!islandExpanded);
  };

  const getChassisClass = () => {
    switch (finishColor) {
      case "desert":
        return "titanium-desert";
      case "white":
        return "titanium-white";
      case "black":
        return "titanium-black";
      case "natural":
      default:
        return "titanium-natural";
    }
  };

  return (
    <div className="relative mx-auto flex flex-col items-center select-none">
      {/* Outer Glow Halo */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-purple-600/10 to-amber-500/10 rounded-[64px] blur-2xl -z-10 opacity-70 animate-apple-pulse pointer-events-none" />

      {/* Main iPhone 16 Pro Body */}
      <div
        className={`relative w-[340px] sm:w-[380px] h-[720px] rounded-[54px] p-3 transition-all duration-500 border border-white/20 ${getChassisClass()}`}
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.1), 0 35px 80px -20px rgba(0,0,0,0.9), inset 0 0 15px rgba(255,255,255,0.08)",
        }}
      >
        {/* Hardware Buttons - Left Side */}
        {/* Action Button */}
        <button
          onClick={() => {
            sound.tap();
            triggerScan("NFC");
          }}
          title="Action Button (Triggers NFC Scan)"
          className="absolute -left-[5px] top-[108px] w-[5px] h-[32px] rounded-l-md bg-[#3a3a3e] hover:bg-blue-500 transition-colors cursor-pointer group"
        >
          <span className="sr-only">Action Button</span>
        </button>
        {/* Volume Up */}
        <div className="absolute -left-[5px] top-[158px] w-[5px] h-[48px] rounded-l-md bg-[#333336]" />
        {/* Volume Down */}
        <div className="absolute -left-[5px] top-[218px] w-[5px] h-[48px] rounded-l-md bg-[#333336]" />

        {/* Hardware Buttons - Right Side */}
        {/* Power / Siri Button */}
        <button
          onClick={() => {
            sound.pop();
            setIslandMode(islandMode === "ai" ? "metrics" : "ai");
            setIslandExpanded(true);
          }}
          title="Side Button (Triggers Apple Intelligence)"
          className="absolute -right-[5px] top-[160px] w-[5px] h-[72px] rounded-r-md bg-[#333336] hover:bg-purple-500 transition-colors cursor-pointer"
        >
          <span className="sr-only">Power Button</span>
        </button>

        {/* Inner OLED Display Bezel */}
        <div className="relative w-full h-full bg-[#050507] rounded-[44px] overflow-hidden flex flex-col border border-black shadow-[inset_0_0_8px_rgba(0,0,0,0.9)]">
          {/* iOS Status Bar */}
          <div className="relative h-11 px-7 pt-2 flex items-center justify-between text-white text-xs font-semibold z-30">
            {/* Time */}
            <span className="tracking-tight font-medium text-[13px]">{currentTime}</span>

            {/* Dynamic Island Floating Pill */}
            <div
              onClick={toggleIsland}
              role="button"
              tabIndex={0}
              aria-label="Expand Dynamic Island"
              className={`absolute left-1/2 -translate-x-1/2 top-2 bg-black rounded-full border border-neutral-800 transition-all duration-300 ease-out cursor-pointer flex items-center justify-between px-3 text-white overflow-hidden ${
                islandExpanded
                  ? "w-[90%] h-[78px] rounded-[28px] py-2 px-3.5 shadow-2xl border-neutral-700 bg-neutral-950/95"
                  : "w-[110px] h-[30px] hover:w-[120px]"
              }`}
            >
              {!islandExpanded ? (
                /* Compact Dynamic Island */
                <div className="w-full flex items-center justify-between">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                  <div className="flex items-center gap-1.5 text-[10px] text-neutral-300">
                    <span className="font-mono text-[9px] text-neutral-400">Titan</span>
                    <Sparkles className="w-2.5 h-2.5 text-blue-400" />
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                  </div>
                </div>
              ) : (
                /* Expanded Dynamic Island (Live Activity) */
                <div className="w-full flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5 text-blue-400 font-medium">
                      {islandMode === "metrics" && <TrendingUp className="w-3.5 h-3.5" />}
                      {islandMode === "scan" && <Scan className="w-3.5 h-3.5 text-emerald-400" />}
                      {islandMode === "ai" && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
                      {islandMode === "call" && <Radio className="w-3.5 h-3.5 text-amber-400" />}
                      <span className="uppercase text-[9px] tracking-wider text-neutral-400">
                        {islandMode === "metrics"
                          ? "Live Telemetry"
                          : islandMode === "scan"
                          ? "NFC Engine"
                          : islandMode === "ai"
                          ? "Apple Intelligence"
                          : "Handoff Call"}
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-mono">Live Sync</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mt-0.5">
                    {islandMode === "metrics" && (
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div className="text-sm font-bold text-white">$48,250 ARR</div>
                          <div className="text-[10px] text-emerald-400 font-medium">+18.4% today</div>
                        </div>
                        <div className="flex gap-0.5 items-end h-5">
                          <div className="w-1 bg-blue-500 rounded-full h-2" />
                          <div className="w-1 bg-blue-500 rounded-full h-4" />
                          <div className="w-1 bg-blue-400 rounded-full h-3" />
                          <div className="w-1 bg-blue-400 rounded-full h-5" />
                          <div className="w-1 bg-emerald-400 rounded-full h-4" />
                        </div>
                      </div>
                    )}

                    {islandMode === "scan" && (
                      <div className="flex items-center justify-between w-full">
                        <div className="text-left">
                          <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Tag Verified
                          </div>
                          <div className="text-[9px] text-neutral-400 truncate max-w-[170px]">
                            {lastScanResult ? lastScanResult.name : "Ready to scan"}
                          </div>
                        </div>
                        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">
                          Secure
                        </span>
                      </div>
                    )}

                    {islandMode === "ai" && (
                      <div className="flex items-center justify-between w-full">
                        <div className="text-left">
                          <div className="text-[11px] font-medium text-purple-300">Copilot Optimizing...</div>
                          <div className="text-[9px] text-neutral-400">0 anomalies in telemetry</div>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-purple-400 border-t-transparent animate-spin" />
                      </div>
                    )}

                    {islandMode === "call" && (
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div className="text-[11px] font-semibold text-white">Ops Standup (6 online)</div>
                          <div className="text-[9px] text-neutral-400">HQ • Spatial Audio On</div>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-mono">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                          12:44
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Status Icons: 5G, Wifi, Battery */}
            <div className="flex items-center gap-1.5 text-neutral-300">
              <span className="text-[10px] font-mono font-bold tracking-tighter">5G</span>
              <Wifi className="w-3.5 h-3.5" />
              <div className="flex items-center">
                <div className="w-5 h-2.5 rounded-sm border border-neutral-300 p-0.5 flex items-center">
                  <div className="h-full w-full bg-white rounded-xs" />
                </div>
                <div className="w-0.5 h-1 bg-neutral-300 rounded-r-xs" />
              </div>
            </div>
          </div>

          {/* Interactive App Screen Content */}
          <div className="flex-1 overflow-y-auto px-4 pt-2 pb-14 text-white no-scrollbar">
            {/* View 1: DASHBOARD OVERVIEW */}
            {activeScreen === "dashboard" && (
              <div className="space-y-3 animate-in fade-in duration-200">
                {/* Greeting & Quick Action */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <p className="text-[11px] text-neutral-400 font-medium">Apple Enterprise Workspace</p>
                    <h3 className="text-base font-bold tracking-tight text-white">Titan Dashboard</h3>
                  </div>
                  <button
                    onClick={() => {
                      sound.tap();
                      setActiveScreen("scanner");
                    }}
                    className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 hover:bg-blue-600/50"
                  >
                    <Scan className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Hero Widget: Real-time ARR & Growth */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-950 border border-white/10 shadow-lg relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-neutral-400 font-medium flex items-center gap-1">
                      <BarChart3 className="w-3 h-3 text-blue-400" /> Monthly Recurring
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      +28.4%
                    </span>
                  </div>
                  <div className="mt-2 text-2xl font-black tracking-tight text-white">$84,920</div>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Automated billing via Apple Pay Enterprise</p>

                  {/* Sparkline Visual */}
                  <div className="mt-3 h-10 w-full flex items-end gap-1.5 pt-2">
                    {[35, 45, 40, 60, 55, 75, 70, 85, 80, 95, 90, 100].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className={`flex-1 rounded-t-sm transition-all duration-300 ${
                          i === 11 ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" : "bg-neutral-800"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Dual Widgets (iOS Stack Style) */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-neutral-900/80 border border-white/10 flex flex-col justify-between">
                    <div className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Cpu className="w-3 h-3" />
                    </div>
                    <div className="mt-2">
                      <div className="text-base font-bold text-white">A18 Pro</div>
                      <div className="text-[10px] text-neutral-400">Neural Engine Active</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-neutral-900/80 border border-white/10 flex flex-col justify-between">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                    <div className="mt-2">
                      <div className="text-base font-bold text-white">0-Knowledge</div>
                      <div className="text-[10px] text-neutral-400">Secure Enclave</div>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive NFC / Barcode Scanner Tile */}
                <div className="p-3 rounded-2xl bg-blue-950/30 border border-blue-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                      <Scan className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Hardware Engine</div>
                      <div className="text-[10px] text-blue-300/80">NFC & Barcode Reader</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      sound.tap();
                      setActiveScreen("scanner");
                    }}
                    className="text-[11px] font-medium bg-blue-500 hover:bg-blue-400 text-white px-2.5 py-1 rounded-full transition-colors"
                  >
                    Launch
                  </button>
                </div>

                {/* Live Activity Switcher Buttons */}
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-white/5">
                  <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    Dynamic Island Demo Modes
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {(["metrics", "scan", "ai", "call"] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => {
                          sound.pop();
                          setIslandMode(mode);
                          setIslandExpanded(true);
                        }}
                        className={`text-[9px] py-1 rounded capitalize font-medium transition-all ${
                          islandMode === mode && islandExpanded
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-neutral-900 text-neutral-400 hover:text-white"
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* View 2: SCANNER SIMULATOR */}
            {activeScreen === "scanner" && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Scan className="w-4 h-4 text-blue-400" /> Scanner Viewfinder
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Sensor Ready
                  </span>
                </div>

                {/* Viewfinder Camera Simulation */}
                <div className="relative h-48 w-full rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden flex items-center justify-center">
                  {/* Grid overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Laser Scan Line */}
                  {isScanning && (
                    <div className="absolute left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_12px_rgba(239,68,68,1)] scanner-laser z-20" />
                  )}

                  {/* Reticle Focus Corners */}
                  <div className="relative w-36 h-36 border border-white/20 rounded-xl flex items-center justify-center">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-400 -mt-0.5 -ml-0.5" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-400 -mt-0.5 -mr-0.5" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-400 -mb-0.5 -ml-0.5" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-400 -mb-0.5 -mr-0.5" />

                    {/* Barcode graphic */}
                    <div className="flex flex-col items-center gap-1 opacity-60">
                      <div className="flex items-center gap-0.5 h-10">
                        {[2, 1, 3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2, 4].map((w, i) => (
                          <div
                            key={i}
                            style={{ width: `${w * 1.5}px` }}
                            className="bg-white h-full rounded-xs"
                          />
                        ))}
                      </div>
                      <span className="font-mono text-[9px] text-neutral-400">8992-7610-0411</span>
                    </div>
                  </div>

                  {isScanning && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-white font-mono bg-black/70 px-2 py-0.5 rounded-full border border-white/10">
                      Decoding tag...
                    </div>
                  )}
                </div>

                {/* Scan Action Triggers */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    disabled={isScanning}
                    onClick={() => triggerScan("BARCODE")}
                    className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                  >
                    <Scan className="w-3.5 h-3.5" />
                    Scan Barcode
                  </button>
                  <button
                    disabled={isScanning}
                    onClick={() => triggerScan("NFC")}
                    className="py-2 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 border border-white/10"
                  >
                    <Radio className="w-3.5 h-3.5 text-amber-400" />
                    Tap NFC Tag
                  </button>
                </div>

                {/* Recent Result Card */}
                {lastScanResult && (
                  <div className="p-3 rounded-xl bg-neutral-900 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-mono text-blue-400">{lastScanResult.type}</span>
                      <span className="text-neutral-500">{lastScanResult.timestamp}</span>
                    </div>
                    <div className="text-xs font-semibold text-white">{lastScanResult.name}</div>
                    <div className="text-[10px] font-mono text-neutral-400">{lastScanResult.code}</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 pt-1">
                      <CheckCircle2 className="w-3 h-3" /> {lastScanResult.status}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* View 3: DEVICE FLEET & SECURITY */}
            {activeScreen === "devices" && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-purple-400" /> Apple Fleet MDM
                  </h3>
                  <span className="text-[10px] font-mono text-blue-400">24/24 Online</span>
                </div>

                {/* Device Spec Card */}
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">iPhone 16 Pro (Primary)</div>
                      <div className="text-[10px] text-neutral-400 font-mono">IMEI: 356984110928374</div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[11px]">
                    <div>
                      <div className="text-neutral-500 text-[10px]">Battery Health</div>
                      <div className="font-semibold text-emerald-400">99% • Peak Perf</div>
                    </div>
                    <div>
                      <div className="text-neutral-500 text-[10px]">OS Version</div>
                      <div className="font-semibold text-white">iOS 18.2 (22C150)</div>
                    </div>
                    <div>
                      <div className="text-neutral-500 text-[10px]">Secure Enclave</div>
                      <div className="font-semibold text-blue-400">Passkey Hardware Locked</div>
                    </div>
                    <div>
                      <div className="text-neutral-500 text-[10px]">Storage Free</div>
                      <div className="font-semibold text-white">384 GB / 512 GB</div>
                    </div>
                  </div>
                </div>

                {/* Fleet Devices List */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Linked Apple Nodes</div>
                  {[
                    { name: 'MacBook Pro M3 Max 16"', role: "HQ Server Gate", status: "Continuity Ready" },
                    { name: 'iPad Pro 13" M4', role: "Warehouse POS Display", status: "Live Handoff" },
                    { name: "Apple Watch Ultra 2", role: "Field Alert Node", status: "Haptic Linked" },
                  ].map((dev, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-neutral-950 border border-white/5 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-medium text-white">{dev.name}</div>
                        <div className="text-[9px] text-neutral-500">{dev.role}</div>
                      </div>
                      <span className="text-[9px] text-blue-400 font-mono bg-blue-500/10 px-1.5 py-0.5 rounded">
                        {dev.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 4: TELEMETRY STREAM */}
            {activeScreen === "telemetry" && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Radio className="w-4 h-4 text-emerald-400" /> Cloud Edge Stream
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400">12ms latency</span>
                </div>

                <div className="p-3 rounded-2xl bg-neutral-950 border border-white/10 font-mono text-[10px] space-y-2 text-neutral-300">
                  <div className="flex items-center justify-between pb-1 border-b border-white/5">
                    <span className="text-neutral-500">EDGE POP: SIN1-EQUINIX</span>
                    <span className="text-emerald-400">CONNECTED</span>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-emerald-400">
                      [21:40:02] <span className="text-white">POST /api/v2/nfc/sync</span> 200 OK (8ms)
                    </p>
                    <p className="text-blue-400">
                      [21:40:08] <span className="text-white">EVENT telemetry.battery</span> 99% nominal
                    </p>
                    <p className="text-purple-400">
                      [21:40:12] <span className="text-white">AI.copilot inference</span> completed (14ms)
                    </p>
                    <p className="text-emerald-400">
                      [21:40:19] <span className="text-white">AUTH passkey.verify</span> Secure Enclave OK
                    </p>
                    <p className="text-amber-400">
                      [21:40:24] <span className="text-white">SYNC handoff.macbook</span> 1,420 items pushed
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">Apple Push Notification (APNs)</div>
                    <div className="text-[10px] text-neutral-400">Zero-overhead silent background refresh</div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>
            )}
          </div>

          {/* iOS Bottom Dock / Tab Navigation */}
          <div className="absolute bottom-0 inset-x-0 h-14 bg-black/80 backdrop-blur-xl border-t border-white/10 px-4 flex items-center justify-around z-30">
            <button
              onClick={() => {
                sound.tap();
                setActiveScreen("dashboard");
              }}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeScreen === "dashboard" ? "text-blue-400" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="text-[9px] font-medium">Metrics</span>
            </button>

            <button
              onClick={() => {
                sound.tap();
                setActiveScreen("scanner");
              }}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeScreen === "scanner" ? "text-blue-400" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <Scan className="w-4 h-4" />
              <span className="text-[9px] font-medium">Scanner</span>
            </button>

            <button
              onClick={() => {
                sound.tap();
                setActiveScreen("devices");
              }}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeScreen === "devices" ? "text-blue-400" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span className="text-[9px] font-medium">Fleet</span>
            </button>

            <button
              onClick={() => {
                sound.tap();
                setActiveScreen("telemetry");
              }}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeScreen === "telemetry" ? "text-blue-400" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <Radio className="w-4 h-4" />
              <span className="text-[9px] font-medium">Edge</span>
            </button>
          </div>

          {/* iOS Home Gesture Indicator Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-40 pointer-events-none" />
        </div>
      </div>

      {/* Interactive Helper Hint under Phone */}
      <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
        <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
        <span>Klik <strong>Dynamic Island</strong> atau tombol <strong>Scanner</strong> untuk simulasi interaktif</span>
      </div>
    </div>
  );
}


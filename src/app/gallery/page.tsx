import React from "react";
import { GalleryViewer } from "@/components/interactive/GalleryViewer";
import { Sparkles, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo & Heritage Gallery | Korama Hostel Trust",
  description:
    "Approved photo representations and cultural motifs of Korama Hostel, study environments, mess facilities, and community artisanal craft traditions.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-950 via-trust-900 to-slate-900 text-white py-16 sm:py-24 border-b border-trust-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-trust-800 text-amber-300 border border-trust-600">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Approved Visual Portfolio</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Photo & Cultural Gallery
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Visual glimpses of student life, academic study environments, clean living quarters, and time-honored artisanal folk craft heritage.
          </p>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-16 sm:py-20 bg-slate-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryViewer />
        </div>
      </section>
    </div>
  );
}

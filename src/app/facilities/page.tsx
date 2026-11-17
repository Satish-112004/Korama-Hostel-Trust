import React from "react";
import { FacilitiesExplorer } from "@/components/interactive/FacilitiesExplorer";
import { ShieldCheck, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verified Hostel Facilities | Living, Mess & Academics",
  description:
    "Comprehensive guide to confirmed student facilities at Korama Hostel Bengaluru: clean accommodation, nutritious mess food, RO drinking water, washing machines, solar water heating, and study tables.",
};

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-950 via-trust-900 to-slate-900 text-white py-16 sm:py-24 border-b border-trust-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Verified & Management Confirmed</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Hostel Facilities & Living Amenities
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Designed to provide students with a secure, hygienic, and disciplined second home where they can concentrate on their higher education without daily survival worries.
          </p>
        </div>
      </section>

      {/* Main Interactive Explorer */}
      <section className="py-16 sm:py-20 bg-slate-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FacilitiesExplorer />
        </div>
      </section>
    </div>
  );
}

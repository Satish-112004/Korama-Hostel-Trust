"use client";

import React, { useState } from "react";
import { verifiedFacilities } from "@/content/facilities";
import { Facility } from "@/types";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Check, ShieldCheck, Info } from "lucide-react";

export function FacilitiesExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Living", "Wellness", "Academics", "Eco-Friendly"];

  const filteredFacilities = activeCategory === "All"
    ? verifiedFacilities
    : verifiedFacilities.filter((f) => f.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-trust-800 text-white shadow-md scale-105"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {cat} {cat !== "All" && `(${verifiedFacilities.filter((f) => f.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Facilities Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFacilities.map((facility: Facility) => (
          <div
            key={facility.id}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between group"
          >
            <div>
              {/* Card Header with Icon */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-trust-50 text-trust-700 border border-trust-200/60 flex items-center justify-center group-hover:scale-110 group-hover:bg-trust-800 group-hover:text-amber-300 transition-all duration-200">
                  <DynamicIcon name={facility.iconName} className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Verified</span>
                </span>
              </div>

              {/* Title & Category */}
              <div className="mb-3">
                <span className="text-[11px] font-bold text-trust-600 uppercase tracking-wider">
                  {facility.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-trust-800 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {facility.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {facility.description}
              </p>

              {/* Verified Features Checklist */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Key Features:
                </span>
                {facility.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-600 text-right">
              Maintained by Korama Hostel Trust
            </div>
          </div>
        ))}
      </div>

      {/* PRD Verification Note */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 flex items-start gap-3.5 text-slate-700 text-xs sm:text-sm">
        <Info className="w-5 h-5 text-trust-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-slate-900">PRD Compliance & Truthfulness Commitment</h4>
          <p className="text-slate-600 leading-relaxed">
            In accordance with the Korama Hostel Trust Product Requirements Document (PRD Section 8.4), we only publish facilities physically verified and confirmed by management. Additional features (such as high-speed Wi-Fi network, library, or security staffing) will only be announced after formal Trust ratification.
          </p>
        </div>
      </div>
    </div>
  );
}

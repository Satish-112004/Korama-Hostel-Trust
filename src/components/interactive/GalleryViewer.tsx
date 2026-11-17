"use client";

import React, { useState } from "react";
import { X, ZoomIn, Info, Shield, Layers, BookOpen, Utensils, HeartHandshake, Building2 } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Hostel Life" | "Academics" | "Dining & Mess" | "Community Arts" | "Campus Environment";
  description: string;
  badge: "Approved Representation" | "Asset Pending Trust Photography";
  iconName: string;
  aspect: string;
  gradient: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Quiet Study Tables & Workstations",
    category: "Academics",
    description: "Dedicated individual desks where residents prepare for university exams, MCA programming, and engineering designs.",
    badge: "Approved Representation",
    iconName: "BookOpen",
    aspect: "h-64",
    gradient: "from-blue-900 to-indigo-950",
  },
  {
    id: "g2",
    title: "Nutritious Mess & Daily Dining Space",
    category: "Dining & Mess",
    description: "Hygienic community dining hall serving wholesome home-cooked vegetarian meals to nourish students daily.",
    badge: "Approved Representation",
    iconName: "Utensils",
    aspect: "h-64",
    gradient: "from-emerald-900 to-slate-900",
  },
  {
    id: "g3",
    title: "Hostel Residence & Living Quarters",
    category: "Campus Environment",
    description: "Centrally located at No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru, providing a peaceful residential environment.",
    badge: "Asset Pending Trust Photography",
    iconName: "Building2",
    aspect: "h-64",
    gradient: "from-slate-900 to-trust-950",
  },
  {
    id: "g4",
    title: "Traditional Artisanal Bamboo Weaving",
    category: "Community Arts",
    description: "Honoring our ancestors' generational mastery of natural fibres, bamboo craftsmanship, and sustainable utilitarian design.",
    badge: "Approved Representation",
    iconName: "Layers",
    aspect: "h-64",
    gradient: "from-amber-950 to-stone-900",
  },
  {
    id: "g5",
    title: "Solar Water Heating Installation",
    category: "Campus Environment",
    description: "Rooftop sustainable solar thermal arrays delivering eco-friendly hot water for daily student morning routines.",
    badge: "Approved Representation",
    iconName: "Building2",
    aspect: "h-64",
    gradient: "from-sky-950 to-teal-950",
  },
  {
    id: "g6",
    title: "Community Unity & Educational Guidance",
    category: "Hostel Life",
    description: "Elder guidance, peer collaboration, and senior mentorship creating a family environment away from home.",
    badge: "Approved Representation",
    iconName: "HeartHandshake",
    aspect: "h-64",
    gradient: "from-trust-900 to-slate-950",
  },
];

export function GalleryViewer() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", "Academics", "Dining & Mess", "Campus Environment", "Community Arts", "Hostel Life"];

  const filteredItems = selectedFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedFilter(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedFilter === cat
                ? "bg-trust-800 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Visual Canvas */}
            <div
              className={`relative ${item.aspect} bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between text-white overflow-hidden`}
            >
              <div className="flex items-center justify-between z-10">
                <span className="text-[11px] font-semibold tracking-wider uppercase bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {item.category}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ZoomIn className="w-4 h-4 text-amber-300" />
                </span>
              </div>

              {/* Graphic Motif */}
              <div className="my-auto text-center z-10 py-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-inner group-hover:scale-105 transition-transform">
                  <BookOpen className="w-8 h-8" />
                </div>
              </div>

              <div className="z-10">
                <span className="text-[10px] text-slate-300 font-medium block">
                  {item.badge}
                </span>
              </div>

              {/* Background ambient pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-trust-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                <span>Click to expand view</span>
                <span className="font-semibold text-trust-600">Korama Trust</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-slate-900 text-white rounded-2xl max-w-2xl w-full border border-slate-700 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Visual */}
            <div
              className={`h-72 bg-gradient-to-br ${selectedItem.gradient} p-8 flex flex-col justify-between relative`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/40 border border-white/10 text-amber-300 uppercase">
                  {selectedItem.category}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-slate-300 hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-center py-6">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 shadow-xl">
                  <BookOpen className="w-10 h-10" />
                </div>
              </div>

              <div>
                <span className="text-xs text-amber-200/90 font-medium">
                  {selectedItem.badge}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-3 bg-slate-900">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Respectful representation policy</span>
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Consent Policy Notice */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 flex items-start gap-3.5 text-xs text-slate-600">
        <Info className="w-5 h-5 text-trust-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-slate-900">Gallery Media & Dignity Policy</h4>
          <p className="mt-1 leading-relaxed">
            Per PRD Section 8.7, Korama Hostel Trust prioritizes student dignity and privacy. Authentic photography featuring identifiable students and youth is published strictly with explicit written consent. Authentic high-resolution site photography will be added as authorized by Trust leadership.
          </p>
        </div>
      </div>
    </div>
  );
}

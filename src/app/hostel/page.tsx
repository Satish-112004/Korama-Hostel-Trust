import React from "react";
import { hostelData } from "@/content/hostel";
import { siteConfig } from "@/content/siteConfig";
import { verifiedFacilities } from "@/content/facilities";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import {
  Building2,
  GraduationCap,
  MapPin,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  Award,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Korama Hostel | Purpose, Students & Facilities",
  description:
    "Learn about Korama Hostel in Journalist Colony, Bengaluru: our founding mission, 15-20 resident students in professional courses, verified facilities, and educational objectives.",
};

export default function HostelPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-trust-950 via-trust-900 to-slate-900 text-white py-16 sm:py-24 border-b border-trust-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-trust-800 text-amber-300 border border-trust-600">
            <Building2 className="w-3.5 h-3.5" />
            <span>Bengaluru Residential Center for Higher Studies</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {hostelData.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-amber-200 font-medium max-w-2xl mx-auto">
            {hostelData.hero.subtitle}
          </p>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            {hostelData.hero.description}
          </p>
        </div>
      </section>

      {/* 2. Our History */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
                Our Genesis & Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {hostelData.history.title}
              </h2>
              <div className="text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {hostelData.history.content}
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-trust-800">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>{siteConfig.contact.addressText}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-trust-900 font-bold text-base border-b border-slate-200 pb-3">
                <GraduationCap className="w-5 h-5 text-trust-600" />
                <span>At A Glance</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-slate-500 block">Established</span>
                  <p className="font-bold text-slate-900">{siteConfig.establishedYear}</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">Resident Capacity</span>
                  <p className="font-bold text-slate-900">{hostelData.studentsInfo.currentCount}</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">Target Communities</span>
                  <p className="font-bold text-slate-900">Korama, Koracha, and Korava Students</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">Location Advantage</span>
                  <p className="font-bold text-slate-900">Journalist Colony, Central Bengaluru</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-trust-800 text-white font-semibold text-xs hover:bg-trust-900 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
                  <span>Enquire for Current Admissions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Established */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
              Founding Motivation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {hostelData.whyEstablished.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {hostelData.whyEstablished.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostelData.whyEstablished.points.map((pt, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2.5 hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-lg bg-trust-100 text-trust-800 flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-base text-slate-900">{pt.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-trust-900 to-growth-950 p-6 sm:p-8 rounded-2xl text-center text-white border border-amber-400/20 max-w-2xl mx-auto shadow-md">
            <p className="text-sm sm:text-base font-semibold text-amber-200 italic">
              &ldquo;{hostelData.whyEstablished.closingQuote}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 4. Vision & Objectives */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
              Guiding Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Vision & Objectives
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              &ldquo;{hostelData.visionAndObjectives.vision}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {hostelData.visionAndObjectives.objectives.map((obj, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium">{obj}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 italic max-w-xl mx-auto">
            &ldquo;{hostelData.visionAndObjectives.closingMessage}&rdquo;
          </p>
        </div>
      </section>

      {/* 5. Our Students & Current Courses */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
              Present Generation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Students & Professional Degrees
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {hostelData.studentsInfo.note}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hostelData.studentsInfo.courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-trust-600" />
                  <h3 className="font-bold text-sm text-slate-900">{course.name}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center text-xs text-slate-500 leading-relaxed">
            {hostelData.studentsInfo.closingSummary}
          </div>
        </div>
      </section>

      {/* 6. Facilities Shortcut */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
                Accommodation Highlights
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Verified On-Site Facilities
              </h2>
            </div>
            <Link
              href="/facilities"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-trust-700 hover:text-trust-900 underline"
            >
              <span>Explore all facility categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {verifiedFacilities.slice(0, 4).map((f) => (
              <div key={f.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-trust-100 text-trust-800 flex items-center justify-center">
                  <DynamicIcon name={f.iconName} className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-xs text-slate-900">{f.title}</h3>
                <p className="text-[11px] text-slate-600 leading-snug">{f.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Motto Display */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
            Hostel Motto
          </span>
          <blockquote className="text-xl sm:text-2xl font-extrabold text-amber-200 leading-snug">
            &ldquo;{hostelData.mottos.primary}&rdquo;
          </blockquote>
          <p className="text-xs text-slate-400">
            Selected motto representing Korama Hostel Trust&apos;s commitment to individual empowerment and community progress.
          </p>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { FaqExplorer } from "@/components/interactive/FaqExplorer";
import { HelpCircle, Sparkles, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Admissions & Facilities",
  description:
    "Official answers to common questions regarding Korama Hostel Trust: eligibility, application process, verified facilities, location in Bengaluru, fees, and rules.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-950 via-trust-900 to-slate-900 text-white py-16 sm:py-24 border-b border-trust-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-trust-800 text-amber-300 border border-trust-600">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Verified Knowledge Base</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Find reliable, verified information for students, parents, and community members. We do not publish unverified claims or guessed operational fees.
          </p>
        </div>
      </section>

      {/* Main FAQ Explorer */}
      <section className="py-16 sm:py-20 bg-slate-50 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqExplorer />

          {/* Need more help banner */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Didn&apos;t find the answer you need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Our management team is happy to assist you directly with specific admission enquiries or parent visits.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-trust-800 hover:bg-trust-900 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>Contact Management</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

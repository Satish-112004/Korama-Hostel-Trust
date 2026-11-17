import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { GraduationCap, MapPin, ShieldCheck, HeartHandshake, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-trust-700 flex items-center justify-center text-white border border-trust-500/30">
                <GraduationCap className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  {siteConfig.name}
                </span>
                <p className="text-xs text-slate-400 font-medium">Bengaluru • Estd. {siteConfig.establishedYear}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Providing a supportive home, nutritious food, and academic environment for students belonging to the Korama, Koracha, and Korava communities pursuing higher education in Bengaluru.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-trust-900/80 text-amber-300 border border-amber-400/20">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Education is Key</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore Information
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-amber-300 transition-colors">
                  About Our Community
                </Link>
              </li>
              <li>
                <Link href="/hostel" className="hover:text-amber-300 transition-colors">
                  About Korama Hostel
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-amber-300 transition-colors">
                  Verified Facilities
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-300 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-300 transition-colors">
                  Photo & Heritage Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Hostel Address */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Hostel Location
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed mb-4">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                {siteConfig.address.line1},<br />
                {siteConfig.address.line2},<br />
                {siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Centrally situated with convenient access to premier colleges, institutes, and metro/bus connectivity.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 underline underline-offset-4"
              >
                <span>View verified map & submit enquiry</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Column 4: Trust Governance & Verification */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Governance & Integrity
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              This website serves strictly verified information according to the Trust PRD specifications. No unverified fees, schedules, or claims are published.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Strict Fact Grounding Enforced</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors"
                >
                  <span>Management Enquiries Portal</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All verified rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/community#accuracy-note" className="hover:text-slate-300">
              Historical Accuracy Note
            </Link>
            <Link href="/contact" className="hover:text-slate-300">
              Contact & Enquiries
            </Link>
            <Link href="/admin" className="hover:text-slate-300">
              Trust Dashboard
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

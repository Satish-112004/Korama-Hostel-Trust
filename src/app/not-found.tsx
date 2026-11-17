import React from "react";
import Link from "next/link";
import { Home, ArrowLeft, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-sm">
        <div className="w-14 h-14 rounded-2xl bg-trust-50 text-trust-700 flex items-center justify-center mx-auto">
          <HelpCircle className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
          Error 404
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The requested page could not be located in the official Korama Hostel Trust sitemap.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-trust-800 hover:bg-trust-900 text-white font-semibold text-xs transition-colors"
          >
            <Home className="w-4 h-4 text-amber-300" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

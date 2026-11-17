import React from "react";
import { AdminEnquiryViewer } from "@/components/interactive/AdminEnquiryViewer";
import { ShieldAlert, Database, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust Management Console | Enquiries & Submissions",
  description:
    "Administrative review console for Korama Hostel Trust authorized staff to view recorded student and parent contact enquiries.",
};

export default function AdminPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Admin Header */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </Link>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-trust-800 text-amber-300 border border-trust-600">
              Staff & Management Portal
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Trust Enquiries & Submissions Management
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Direct view into live enquiries submitted through the official Korama Hostel contact portal.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-700">
              <Database className="w-4 h-4" />
              <span>Backend Connected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Content */}
      <section className="py-12 bg-slate-100 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <AdminEnquiryViewer />
        </div>
      </section>
    </div>
  );
}

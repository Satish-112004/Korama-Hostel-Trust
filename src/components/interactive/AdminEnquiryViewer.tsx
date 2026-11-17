"use client";

import React, { useState, useEffect } from "react";
import { ContactSubmission } from "@/types";
import { formatDate } from "@/lib/utils";
import { ShieldCheck, Mail, Phone, Calendar, RefreshCw, Search, CheckCircle, Clock, AlertCircle } from "lucide-react";

export function AdminEnquiryViewer() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmissions(data.submissions || []);
      } else {
        setError(data.error || "Failed to load enquiries");
      }
    } catch {
      setError("Network error while connecting to enquiry database.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const filtered = submissions.filter((sub) => {
    const q = searchTerm.toLowerCase();
    return (
      sub.name.toLowerCase().includes(q) ||
      sub.subject.toLowerCase().includes(q) ||
      sub.message.toLowerCase().includes(q) ||
      (sub.email && sub.email.toLowerCase().includes(q)) ||
      (sub.phone && sub.phone.includes(q)) ||
      sub.id.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Management Enquiries Console
            </h3>
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
              Live Backend
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time inspection of messages and admissions enquiries recorded by Korama Hostel Trust backend.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={fetchSubmissions}
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter enquiries by student name, phone, ticket ID, or subject..."
          className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-trust-200 focus:border-trust-600"
        />
      </div>

      {/* Error state */}
      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Submissions List */}
      {loading ? (
        <div className="py-12 text-center text-slate-400 text-sm">
          <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-trust-600" />
          <span>Reading enquiries from backend...</span>
        </div>
      ) : filtered.length > 0 ? (
        <div className="space-y-4">
          <div className="text-xs text-slate-500 font-medium">
            Showing {filtered.length} recorded enquiries:
          </div>
          <div className="space-y-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-trust-300 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                  <div>
                    <span className="font-mono text-xs font-bold text-trust-700 bg-trust-50 px-2 py-0.5 rounded border border-trust-200">
                      {item.id}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">{item.name}</h4>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{formatDate(item.createdAt)}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Stored in Database</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {item.email && (
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-medium text-slate-800">{item.email}</span>
                    </div>
                  )}
                  {item.phone && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-medium text-slate-800">{item.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h5 className="text-xs font-bold text-slate-800">Subject: {item.subject}</h5>
                  <p className="text-xs text-slate-600 mt-1 whitespace-pre-wrap leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                    {item.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-500 text-sm">
          <p>No enquiries recorded yet.</p>
          <p className="text-xs text-slate-400 mt-1">
            Submit a test enquiry from the Contact page and refresh this console to see it appear here live!
          </p>
        </div>
      )}
    </div>
  );
}

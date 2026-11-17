"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Phone, Mail, User, FileText, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
    submissionId?: string;
  }>({ type: "idle" });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name (minimum 2 characters).";
    }
    const hasEmail = formData.email.trim().length > 0;
    const hasPhone = formData.phone.trim().length > 0;
    if (!hasEmail && !hasPhone) {
      errs.contact = "Please provide at least one contact method (email or phone).";
    }
    if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (hasPhone && formData.phone.trim().replace(/\D/g, "").length < 8) {
      errs.phone = "Please enter a valid phone number (at least 8 digits).";
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = "Please enter an enquiry subject.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    if (!formData.consent) {
      errs.consent = "Please acknowledge that you agree to be contacted regarding this enquiry.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Your enquiry was successfully recorded.",
          submissionId: data.submissionId,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          consent: false,
        });
        setErrors({});
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to process enquiry. Please try again or visit the hostel directly.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error occurred. Please check your internet connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-trust-600" />
          <span>Send Official Enquiry</span>
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Have a question about admission, facilities, or community support? Submit your message to Korama Hostel Trust management.
        </p>
      </div>

      {status.type === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm">Enquiry Submitted Successfully!</h4>
            <p className="text-xs text-emerald-700 mt-0.5">{status.message}</p>
            {status.submissionId && (
              <p className="text-xs font-mono font-bold bg-white/70 px-2 py-1 rounded inline-block mt-2 border border-emerald-200">
                Ticket Reference: {status.submissionId}
              </p>
            )}
            <p className="text-xs text-emerald-700 mt-2">
              Hostel management reviews submissions regularly. We will contact you via your provided details.
            </p>
          </div>
        </div>
      )}

      {status.type === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm">Submission Error</h4>
            <p className="text-xs text-rose-700 mt-0.5">{status.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-slate-500" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Anand Kumar"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.name ? "border-rose-300 focus:ring-rose-200 bg-rose-50/30" : "border-slate-300 focus:ring-trust-200 focus:border-trust-600"
            }`}
            disabled={loading}
          />
          {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
        </div>

        {/* Contact info notice */}
        {errors.contact && (
          <p className="text-xs font-medium text-rose-600 bg-rose-50 p-2 rounded border border-rose-200">
            {errors.contact}
          </p>
        )}

        {/* Grid for Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                errors.email ? "border-rose-300 focus:ring-rose-200 bg-rose-50/30" : "border-slate-300 focus:ring-trust-200 focus:border-trust-600"
              }`}
              disabled={loading}
            />
            {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>Mobile Phone</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                errors.phone ? "border-rose-300 focus:ring-rose-200 bg-rose-50/30" : "border-slate-300 focus:ring-trust-200 focus:border-trust-600"
              }`}
              disabled={loading}
            />
            {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>Enquiry Subject *</span>
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Admission Inquiry for Engineering Student"
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
              errors.subject ? "border-rose-300 focus:ring-rose-200 bg-rose-50/30" : "border-slate-300 focus:ring-trust-200 focus:border-trust-600"
            }`}
            disabled={loading}
          />
          {errors.subject && <p className="text-xs text-rose-600 mt-1">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
            <span>Message / Questions *</span>
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please share details such as student's course, college in Bengaluru, hometown district, and your specific queries..."
            className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 resize-y ${
              errors.message ? "border-rose-300 focus:ring-rose-200 bg-rose-50/30" : "border-slate-300 focus:ring-trust-200 focus:border-trust-600"
            }`}
            disabled={loading}
          />
          {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
        </div>

        {/* Consent Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-trust-600 focus:ring-trust-500"
              disabled={loading}
            />
            <span className="text-xs text-slate-600 leading-normal">
              I consent to Korama Hostel Trust storing and processing these contact details solely for answering this enquiry. My information will not be shared with third parties.
            </span>
          </label>
          {errors.consent && <p className="text-xs text-rose-600 mt-1">{errors.consent}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-trust-800 hover:bg-trust-900 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-600 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Recording Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-amber-300" />
                <span>Submit Official Enquiry</span>
              </>
            )}
          </button>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Server-validated • No spam • Managed securely by Korama Hostel Trust</span>
        </div>
      </form>
    </div>
  );
}

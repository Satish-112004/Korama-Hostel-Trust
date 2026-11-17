import React from "react";
import { siteConfig } from "@/content/siteConfig";
import { ContactForm } from "@/components/interactive/ContactForm";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink, Navigation } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location | Korama Hostel Trust Bengaluru",
  description:
    "Contact Korama Hostel Trust at No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru. Submit an enquiry for higher education admissions, visiting hours, or management support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-trust-950 via-trust-900 to-slate-900 text-white py-16 sm:py-24 border-b border-trust-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-trust-800 text-amber-300 border border-trust-600">
            <MapPin className="w-3.5 h-3.5" />
            <span>Journalist Colony, Bengaluru</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Contact & Hostel Location
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Korama Hostel Trust management regarding admission enquiries, parent visits, or community welfare.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Verified Location Details */}
      <section className="py-16 sm:py-20 bg-slate-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Official Contact Form (Connected to Backend) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Verified Address, Map & Office Information */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-trust-100 text-trust-700 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Hostel Address</h3>
                    <p className="text-xs text-slate-500 font-medium">Verified Premises</p>
                  </div>
                </div>

                <div className="text-sm text-slate-700 leading-relaxed">
                  <p className="font-semibold text-slate-900">{siteConfig.name}</p>
                  <p>{siteConfig.address.line1}</p>
                  <p>{siteConfig.address.line2}</p>
                  <p>
                    {siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">PIN Code: {siteConfig.address.postalCodePlaceholder} (central area)</p>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href="https://maps.google.com/?q=No.+19+Mavalli+Tank+Bund+Road+Journalist+Colony+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-300" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Verified Contact Details Notice Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Direct Channels</h3>
                    <p className="text-xs text-slate-500 font-medium">Verification in progress</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="font-bold text-slate-700 block mb-0.5">Official Telephone:</span>
                    <p>{siteConfig.contact.phoneNote}. Please use the online enquiry form on this page for prioritized response.</p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="font-bold text-slate-700 block mb-0.5">Official Email:</span>
                    <p>{siteConfig.contact.emailNote}. Messages submitted here are directly archived in the management console.</p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="font-bold text-slate-700 block mb-0.5">Visiting Hours for Parents:</span>
                    <p>Visiting during daytime hours is welcomed. Please notify management via the form prior to in-person review of facilities.</p>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>PRD Compliance: No false contact numbers are published.</span>
                </div>
              </div>

              {/* Map Preview Embed */}
              <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm overflow-hidden">
                <div className="w-full h-60 rounded-xl overflow-hidden bg-slate-100 relative">
                  <iframe
                    title="Korama Hostel Trust Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.169123847321!2d77.5815!3d12.9615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15df00000001%3A0x0!2sMavalli%20Tank%20Bund%20Rd%2C%20Journalist%20Colony%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-2 text-center">
                  <span className="text-[11px] text-slate-500">
                    Journalist Colony, Mavalli Tank Bund Road, Bengaluru
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { verifiedFacilities } from "@/content/facilities";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import {
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Sparkles,
  MapPin,
  CheckCircle2,
  Users2,
  Building,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-950 via-trust-900 to-slate-950 text-white overflow-hidden py-20 lg:py-28 border-b border-trust-800/60">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-trust-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-growth-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-trust-800/80 border border-trust-600/50 text-xs sm:text-sm font-semibold text-amber-300 shadow-inner">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Supporting Higher Education in Bengaluru since {siteConfig.establishedYear}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                A Home of Learning, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-300">
                  Unity & Opportunity
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to <strong className="text-white">{siteConfig.name}</strong>. We provide secure accommodation, nutritious home-style meals, and a dedicated study atmosphere for students of the Korama, Koracha, and Korava communities pursuing university degrees in Bengaluru.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/hostel"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  <span>Explore Hostel</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/community"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all"
                >
                  <span>About Our Community</span>
                  <Users2 className="w-4 h-4 text-amber-300" />
                </Link>
              </div>

              {/* Verified badges row */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified 15–20 Resident Capacity</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Home-Style Food & Clean Mess</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Solar Water & 24/7 RO Filtration</span>
                </span>
              </div>
            </div>

            {/* Right Column: Hero Graphic Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 to-trust-950 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-amber-400" />
                    <span className="text-sm font-bold text-white tracking-wide">
                      Hostel At A Glance
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    Verified Facts
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <span className="text-[11px] text-slate-400 block font-medium uppercase tracking-wider">
                      Location
                    </span>
                    <p className="text-slate-100 font-semibold mt-0.5">
                      Journalist Colony, Bengaluru, Karnataka
                    </p>
                  </div>

                  <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <span className="text-[11px] text-slate-400 block font-medium uppercase tracking-wider">
                      Communities Served
                    </span>
                    <p className="text-slate-100 font-semibold mt-0.5">
                      Korama, Koracha, and Korava Students
                    </p>
                  </div>

                  <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <span className="text-[11px] text-slate-400 block font-medium uppercase tracking-wider">
                      Core Academic Streams
                    </span>
                    <p className="text-slate-100 font-semibold mt-0.5">
                      Engineering, Optometry, MCA, Nursing, Pharm.D.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-trust-900 to-growth-950 p-4 rounded-xl border border-amber-400/20 text-center">
                    <p className="text-xs text-amber-200 font-medium italic">
                      &ldquo;{siteConfig.mottos.primary}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5"
                  >
                    <span>Enquire about admissions directly</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Welcome & Introduction Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
              Welcome to Koram Hostel
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              A Home Away From Home for Future Leaders
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Korama Hostel is more than just a place to stay—it is a supportive family community that empowers higher education, unity, cultural dignity, and personal growth for youth traveling to Bengaluru from across Karnataka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-trust-100 text-trust-800 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6 text-trust-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Academic Focus</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Quiet study environment, individual workstations, and peer motivation allowing students to excel in demanding university coursework.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-growth-100 text-growth-800 flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6 text-growth-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Supportive Care</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fresh home-style nutritious mess food, continuous RO drinking water, washing machines, and caring guidance from community elders.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Community Progress</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Founded on the belief that when one student succeeds, the entire community progresses toward greater dignity and nation-building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-trust-700 uppercase tracking-widest block mb-2">
                  Our Purpose
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Present clear, verified guidance and safe accommodation for students of the Korama, Koracha, and Korava communities; eliminate accommodation and economic hurdles for university applicants; and build responsible, confident professionals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-trust-600" />
                <span>Project baseline specification</span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-growth-700 uppercase tracking-widest block mb-2">
                  Our Aspiration
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To empower every Korama student through quality education, discipline, and opportunity, enabling them to become confident professionals and responsible citizens who contribute to society with knowledge, integrity, and compassion.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-growth-600" />
                <span>Approved project vision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Navigation Hub */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
              Information Pathways
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              What would you like to explore?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Direct access to all verified areas of Korama Hostel Trust&apos;s digital information ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/community"
              className="group p-6 rounded-2xl border border-slate-200 hover:border-trust-400 bg-white hover:bg-trust-50/40 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-trust-100 text-trust-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-trust-800 flex items-center justify-between">
                <span>About Our Community</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-trust-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Learn about Korama, Koracha, and Korava heritage, traditional occupations, folk crafts, and modern career achievements.
              </p>
            </Link>

            <Link
              href="/hostel"
              className="group p-6 rounded-2xl border border-slate-200 hover:border-trust-400 bg-white hover:bg-trust-50/40 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-trust-100 text-trust-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-trust-800 flex items-center justify-between">
                <span>About Korama Hostel</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-trust-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                History of No. 19 Mavalli Tank Bund Road, purpose, student disciplines, objectives, and leadership motto.
              </p>
            </Link>

            <Link
              href="/facilities"
              className="group p-6 rounded-2xl border border-slate-200 hover:border-trust-400 bg-white hover:bg-trust-50/40 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-growth-100 text-growth-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-growth-800 flex items-center justify-between">
                <span>Verified Facilities</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-growth-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Review confirmed amenities: clean rooms, nutritious mess meals, 24/7 RO water, washing machines, and solar water heating.
              </p>
            </Link>

            <Link
              href="/faq"
              className="group p-6 rounded-2xl border border-slate-200 hover:border-trust-400 bg-white hover:bg-trust-50/40 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-amber-800 flex items-center justify-between">
                <span>Frequently Asked Questions</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Answers to common inquiries on eligibility, location, documentation, and contacting management.
              </p>
            </Link>

            <Link
              href="/contact"
              className="group p-6 rounded-2xl border border-slate-200 hover:border-trust-400 bg-white hover:bg-trust-50/40 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-trust-100 text-trust-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-trust-800 flex items-center justify-between">
                <span>Contact & Location</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-trust-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Verified address in Journalist Colony, location map, and our secure official enquiry submission form.
              </p>
            </Link>

            <Link
              href="/gallery"
              className="group p-6 rounded-2xl border border-slate-200 hover:border-trust-400 bg-white hover:bg-trust-50/40 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-slate-800 flex items-center justify-between">
                <span>Photo & Heritage Gallery</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Explore approved representations of hostel life, academic spaces, dining, and cultural artisanal traditions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Verified Facilities Snapshot */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
                Confirmed Amenities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Verified Hostel Facilities
              </h2>
            </div>
            <Link
              href="/facilities"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-trust-700 hover:text-trust-900 underline"
            >
              <span>View all verified facilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verifiedFacilities.slice(0, 4).map((facility) => (
              <div
                key={facility.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-trust-50 text-trust-700 flex items-center justify-center">
                  <DynamicIcon name={facility.iconName} className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">{facility.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{facility.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI Assistant Feature Banner */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-trust-900 via-slate-900 to-growth-950 p-8 sm:p-12 rounded-3xl border border-amber-400/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Strictly Grounded • No Hallucinations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ask the Korama Hostel Trust AI Assistant
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Have questions about eligible courses, verified amenities, or location? Our assistant responds only using approved Trust records and guides you to management for unverified policies.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
              >
                <span>Read FAQ & Try Assistant</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Location Preview */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
                Hostel Premises
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Visit Us in Journalist Colony, Bengaluru
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900">Address: </strong>
                {siteConfig.contact.addressText}
              </p>
              <p className="text-xs text-slate-500">
                Centrally located with direct bus and metro connectivity for students attending engineering colleges, optometry institutes, and universities across Bengaluru.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-trust-800 hover:bg-trust-900 text-white font-semibold text-sm shadow-md"
              >
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>Open Contact & Map</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { communityNarrative } from "@/content/community";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import {
  Users,
  Compass,
  Shield,
  Hammer,
  Music,
  Globe,
  Award,
  Sparkles,
  Info,
  CheckCircle,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Community | Korama, Koracha & Korava Heritage",
  description:
    "Celebrating the rich cultural heritage, artisanal craftsmanship, resilience, unity, and modern academic progress of the Korama, Koracha, and Korava communities.",
};

export default function CommunityPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-trust-950 via-trust-900 to-slate-900 text-white py-16 sm:py-24 border-b border-trust-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-trust-800 text-amber-300 border border-trust-600">
            <Users className="w-3.5 h-3.5" />
            <span>Honoring Heritage & Inspiring Future Generations</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {communityNarrative.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-amber-200 font-medium max-w-2xl mx-auto">
            {communityNarrative.hero.subtitle}
          </p>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            {communityNarrative.hero.description}
          </p>
        </div>
      </section>

      {/* 2. Who are we? */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
                Our Identity & Heart
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Welcome to Koram Hostel
              </h2>
              <div className="text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Koram Hostel is a home for students belonging to the Korama, Koracha, and Korava communities. Our hostel is more than just a place to stay—it is a family that supports education, unity, culture, and personal growth.
                </p>
                <p>
                  Our community has a rich cultural heritage, a long history of traditional skills, and a strong spirit of resilience. While preserving our traditions, today's generation is making remarkable progress in education, technology, business, government service, and many other professions.
                </p>
                <p className="font-semibold text-trust-900">
                  We take pride in our identity, our culture, and our commitment to building a brighter future.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-trust-900 to-growth-950 p-8 rounded-3xl text-white shadow-xl border border-trust-800">
              <h3 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>Enduring Community Pillars</span>
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></div>
                  <p>Preserving ancestral craftsmanship in natural fibres and utilitarian arts.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></div>
                  <p>Fostering brotherhood and mutual support across families and regions.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></div>
                  <p>Championing university education as the ultimate catalyst for progress.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <Link
                  href="/hostel"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-amber-200"
                >
                  <span>See how Korama Hostel supports students</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who are Korama, Koracha, and Korava? & Regional Notes */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
              Regional Diversity & Harmony
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Who are Korama, Koracha, and Korava?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              These historic community designations span diverse geographical and linguistic regions across South India. While terminology and administrative classifications vary across state records, community members share common ancestral craftsmanship, resilience, and cultural values.
            </p>
          </div>

          {/* Regional Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityNarrative.regions.map((reg, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{reg.state}</span>
                  <Globe className="w-4 h-4 text-trust-600" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{reg.notes}</p>
              </div>
            ))}
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {communityNarrative.whoAreWeFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-trust-50 text-trust-700 flex items-center justify-center font-bold">
                  <DynamicIcon name={feat.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our History */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
              A Journey of Centuries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our History & Ecological Legacy
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              From profound ecological knowledge of forests and native flora to thriving roles in modern academia and public leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityNarrative.historyPeriods.map((period, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {period.era}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900 mb-2">{period.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{period.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-600">
                  Step 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Traditional Occupations (6 cards) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
              Artisanal Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Traditional Occupations & Sustainable Craft
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Generational mastery of natural materials, agricultural tools, and handcrafted utility products that sustained rural households and market towns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityNarrative.traditionalOccupations.map((occ) => (
              <div
                key={occ.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                  <DynamicIcon name={occ.iconName} className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-base text-slate-900">{occ.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{occ.description}</p>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                  <strong className="text-slate-700">Natural Materials:</strong> {occ.materials}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Values & Strengths */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-trust-600 uppercase tracking-widest">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Enduring Values
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              These timeless principles guide each generation towards education, civic excellence, and community advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityNarrative.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2 hover:bg-white hover:border-trust-300 hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-trust-100 text-trust-700 flex items-center justify-center mb-2">
                  <DynamicIcon name={val.iconName} className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. From Tradition to Modern Success */}
      <section className="py-16 bg-gradient-to-br from-trust-950 via-slate-900 to-trust-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
              Modern Educational Horizons
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              From Tradition to Modern Achievement
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Education has become the unstoppable foundation for community progress. Today, community youth excel across demanding modern professions and higher educational streams.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {communityNarrative.modernProfessions.map((prof, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-xl text-center space-y-2 hover:border-amber-400/50 hover:bg-slate-800 transition-all"
              >
                <div className="w-8 h-8 mx-auto rounded-lg bg-trust-700/50 text-amber-300 flex items-center justify-center">
                  <DynamicIcon name={prof.iconName} className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-200 block">
                  {prof.category}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 italic">
            "Education transforms individuals, builds confidence, and creates a brighter future for generations to come."
          </p>
        </div>
      </section>

      {/* 8. Historical Accuracy & Dignity Note */}
      <section id="accuracy-note" className="py-12 bg-amber-50/60 border-t border-amber-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-amber-300/80 shadow-sm space-y-3">
            <div className="flex items-center gap-2.5 text-amber-900 font-bold text-base">
              <Info className="w-5 h-5 text-amber-700 shrink-0" />
              <span>{communityNarrative.historicalAccuracyNote.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {communityNarrative.historicalAccuracyNote.content}
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-medium">
              Reference: PRD Section 8.2 Historical Accuracy Requirement • Authored with respect and academic integrity.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

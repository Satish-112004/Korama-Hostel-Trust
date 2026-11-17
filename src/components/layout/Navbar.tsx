"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/siteConfig";
import { Menu, X, Sparkles, PhoneCall, GraduationCap } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/community", label: "About Community" },
  { href: "/hostel", label: "About Hostel" },
  { href: "/facilities", label: "Facilities" },
  { href: "/faq", label: "FAQ" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

interface NavbarProps {
  onOpenAiAssistant?: () => void;
}

export function Navbar({ onOpenAiAssistant }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-800"
          : "bg-slate-900 border-b border-slate-800/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-trust-600 via-trust-700 to-growth-800 flex items-center justify-center text-white shadow-md border border-trust-400/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-xs text-slate-300 font-medium tracking-wide">
                Bengaluru • Estd. {siteConfig.establishedYear}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                    isActive
                      ? "text-amber-300 bg-trust-800/60 font-semibold shadow-inner"
                      : "text-slate-200 hover:text-white hover:bg-slate-800/60"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {onOpenAiAssistant && (
              <button
                type="button"
                onClick={onOpenAiAssistant}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-trust-600 to-growth-700 text-white shadow hover:shadow-lg hover:from-trust-500 hover:to-growth-600 transition-all border border-sky-400/30"
                title="Ask the official grounded AI Assistant"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>AI Assistant</span>
              </button>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-slate-900" />
              <span>Contact Trust</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {onOpenAiAssistant && (
              <button
                type="button"
                onClick={onOpenAiAssistant}
                className="p-2 rounded-lg bg-trust-800 text-amber-300 border border-trust-700 focus:outline-none"
                aria-label="Open AI Assistant"
              >
                <Sparkles className="w-5 h-5" />
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close main navigation" : "Open main navigation"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? "text-amber-300 bg-trust-800/80 font-semibold"
                      : "text-slate-200 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-amber-500 font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Hostel Management</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

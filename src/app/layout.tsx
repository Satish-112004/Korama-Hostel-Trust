import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/siteConfig";
import { ClientLayout } from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Official Website`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Official website of Korama Hostel Trust (Koram Hostel), Bengaluru. Providing safe accommodation, nutritious food, and academic support for students belonging to Korama, Koracha, and Korava communities.",
  keywords: [
    "Korama Hostel",
    "Koram Hostel",
    "Korama Hostel Trust",
    "Korama community",
    "Koracha",
    "Korava",
    "Hostel Bengaluru",
    "Mavalli Tank Bund Road",
    "Journalist Colony",
  ],
  authors: [{ name: "Korama Hostel Trust" }],
  openGraph: {
    title: `${siteConfig.name} | Bengaluru`,
    description:
      "A home of learning, unity, and opportunity for students belonging to Korama, Koracha, and Korava communities pursuing higher education in Bengaluru.",
    url: "https://koramahosteltrust.org",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-trust-800 selection:text-amber-300">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

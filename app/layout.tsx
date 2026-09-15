import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/chrome";
import { RevealRoot } from "@/components/reveal";
import { site } from "@/lib/content";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.fullName} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.fullName} — ${site.tagline}`,
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.fullName,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${plex.variable} ${archivo.variable} h-full antialiased`}
    >
      <head>
        {/* Without JS the reveal observer never runs, so show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-white">
        <RevealRoot />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

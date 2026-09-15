import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { RevealRoot } from "@/components/reveal";
import { services, site } from "@/lib/content";
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
    default: "Career Consultancy in Pune, Navi Mumbai & Thane — 50LPA",
    template: `%s — ${site.name}`,
  },
  description: site.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${site.fullName} — ${site.tagline}`,
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.fullName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.tagline}`,
    description: site.description,
  },
};

/**
 * Everything below is a restatement of what the site already says in visible
 * copy. No `sameAs` (no social profiles exist yet), no `Person` node, no street
 * address or opening hours — none of those have been confirmed.
 */
const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `https://${site.domain}/#organisation`,
  name: site.fullName,
  alternateName: site.name,
  url: `https://${site.domain}/`,
  slogan: site.tagline,
  description: site.description,
  email: site.email,
  foundingDate: site.founded,
  image: `https://${site.domain}/opengraph-image.png`,
  logo: `https://${site.domain}/apple-icon.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: site.locations.map((name) => ({ "@type": "City", name })),
  knowsAbout: services.map((service) => service.name),
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
        <JsonLd data={organisationSchema} />
        <RevealRoot />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

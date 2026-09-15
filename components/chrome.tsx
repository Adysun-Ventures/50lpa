import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/components/nav-links";
import { bands, site } from "@/lib/content";

export const ctaPrimary =
  "inline-flex items-center rounded-lg bg-gradient-to-r from-brand to-brand-bright px-6 py-3.5 font-display text-sm font-bold text-white shadow-[0_10px_30px_-12px_rgba(27,63,184,0.9)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-14px_rgba(27,63,184,1)]";

export const ctaSecondary =
  "inline-flex items-center rounded-lg border border-line bg-white px-6 py-3.5 font-display text-sm font-bold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-line ${className}`}
    >
      <Container className="py-20 sm:py-28">{children}</Container>
    </section>
  );
}

export function SectionHeading({
  title,
  lede,
}: {
  title: string;
  lede?: string;
}) {
  return (
    <div className="reveal max-w-2xl">
      <h2 className="font-display text-3xl font-bold tracking-[-0.02em] sm:text-5xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 text-lg leading-relaxed text-muted">{lede}</p>
      ) : null}
    </div>
  );
}

export function Wordmark({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <Link
      href="/"
      className="inline-flex flex-col leading-none"
      aria-label={`${site.fullName} — home`}
    >
      {/*
       * The mark is dark-on-white, so it carries its own tile — which is what
       * makes it legible on the ink footer instead of vanishing into it.
       */}
      <Image
        src="/logo.png"
        alt=""
        width={48}
        height={48}
        loading="eager"
        // max-w-none: preflight's `max-width:100%` clamps a fixed-size logo to
        // 0 inside this shrink-to-fit flex link.
        className="h-11 w-11 max-w-none rounded-lg sm:h-12 sm:w-12"
      />
      <span
        className={`mt-1 hidden text-[0.6875rem] font-medium sm:block ${
          tone === "light" ? "text-white/60" : "text-muted"
        }`}
      >
        Consultancy Services
      </span>
    </Link>
  );
}

/* The scale the firm is named for, as a hairline rule under the header. */
function BandRule() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-6 bottom-0 h-2.5 lg:inset-x-8"
    >
      {bands.map((band, i) => (
        <span
          key={band.short}
          className={`absolute bottom-0 w-px ${
            i === bands.length - 1 ? "h-2.5 bg-accent" : "h-1.5 bg-line"
          }`}
          style={{ left: `${10 + i * 20}%` }}
        />
      ))}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <Container className="relative flex h-20 items-center justify-between gap-6">
        <Wordmark />
        <NavLinks />
        <BandRule />
      </Container>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="grain relative mt-auto overflow-hidden bg-ink text-white/70">
      <div aria-hidden className="grid-bg-dark absolute inset-0" />
      <div
        aria-hidden
        className="drift glow -top-24 -right-10 h-72 w-72 bg-brand/40"
      />

      <Container className="relative py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Wordmark tone="light" />
            <p className="mt-6 max-w-sm leading-relaxed">
              We help people become job-ready, position themselves properly,
              reach the right opportunities, and keep growing after they are
              hired.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold text-white">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Career consulting", "/services#career-consulting"],
                ["Professional branding", "/services#professional-branding"],
                ["Interview support", "/services#interview-support"],
                ["Post-placement support", "/services#post-placement-support"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold text-white">
              Where we work
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {site.locations.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block text-sm transition-colors hover:text-white"
            >
              {site.email}
            </a>
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-7 text-xs leading-relaxed text-white/50">
          {site.fullName}. Career consulting, professional branding and
          placement assistance. We do not guarantee employment outcomes, and we
          never fabricate a candidate&rsquo;s experience.
        </p>
      </Container>
    </footer>
  );
}

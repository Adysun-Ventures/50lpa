import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/chrome";
import { ServiceIcon } from "@/components/graphics";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Career consulting, professional branding, skill and industry guidance, job readiness, placement assistance, interview support, offer guidance and post-placement support.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="grain relative overflow-hidden border-b border-line">
        <div aria-hidden className="grid-bg absolute inset-0" />
        <div
          aria-hidden
          className="drift glow -top-32 -left-24 h-80 w-80 bg-brand-bright/25"
        />
        <div
          aria-hidden
          className="drift glow -top-10 right-0 h-72 w-72 bg-accent/30"
          style={{ animationDelay: "-8s" }}
        />

        <Container className="relative pt-16 pb-16 sm:pt-24">
          <div className="max-w-2xl">
            <h1 className="font-display text-[2.6rem] leading-[1] font-extrabold tracking-[-0.03em] sm:text-6xl">
              Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              These are not eight separate products. They are eight stages of
              one process, and most candidates need a specific few of them —
              not all of them. We will tell you which.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <div className="space-y-6">
          {services.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              className="reveal scroll-mt-24 rounded-2xl border border-line bg-white p-7 transition duration-300 hover:border-brand/30 hover:shadow-[0_28px_60px_-32px_rgba(27,63,184,0.5)] sm:p-9 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-14"
            >
              <div>
                <div className="flex items-center gap-4">
                  <ServiceIcon slug={service.slug} />
                  <span className="nums font-display text-3xl font-bold text-brand/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                  {service.name}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {service.summary}
                </p>
              </div>

              <div className="mt-7 lg:mt-0">
                <p className="leading-relaxed text-ink-soft">
                  {service.detail}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Container className="pb-20 sm:pb-28">
        <div className="grain relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand to-brand-bright px-8 py-14 text-white sm:px-14 sm:py-16">
          <div aria-hidden className="grid-bg-dark absolute inset-0" />
          <div
            aria-hidden
            className="drift glow -right-16 -bottom-20 h-72 w-72 bg-accent/40"
          />
          <div className="reveal relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
              Not sure which of these you need?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              That is the normal starting point. The first conversation is an
              assessment — we look at where you are, where you are aiming, and
              name the shortest route between them.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center rounded-lg bg-white px-6 py-3.5 font-display text-sm font-bold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-accent"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

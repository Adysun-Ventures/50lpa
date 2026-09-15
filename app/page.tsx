import Link from "next/link";
import {
  Container,
  Section,
  SectionHeading,
  ctaPrimary,
  ctaSecondary,
} from "@/components/chrome";
import {
  BandChart,
  CoverageChart,
  SegmentScale,
  ServiceIcon,
} from "@/components/graphics";
import { BandLadder, JourneyTimeline } from "@/components/visuals";
import { journey, principles, services, site } from "@/lib/content";

const stats = [
  { value: services.length, label: "service layers" },
  { value: journey.length, label: "stages, end to end" },
  { value: site.locations.length, label: "cities in Maharashtra" },
  { value: 1, label: "profile across every platform" },
];

export default function HomePage() {
  return (
    <>
      <div className="grain relative overflow-hidden">
        <div aria-hidden className="grid-bg absolute inset-0" />
        <div
          aria-hidden
          className="drift glow -top-40 -left-32 h-[26rem] w-[26rem] bg-brand-bright/25"
        />
        <div
          aria-hidden
          className="drift glow top-24 -right-24 h-80 w-80 bg-accent/35"
          style={{ animationDelay: "-9s" }}
        />

        <Container className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-xs font-semibold text-ink-soft backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-accent" />
                {site.locations.join(" · ")}
              </span>

              <h1 className="mt-7 font-display text-[2.6rem] leading-[0.98] font-extrabold tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]">
                Where you are today. Where you want to be.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                Everything in between is the work — and it is the part most
                people are left to figure out alone. {site.fullName} handles
                the whole distance: assessment, branding, industry guidance,
                interview preparation, placement, and the years after you join.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className={ctaPrimary}>
                  Book a consultation
                </Link>
                <Link href="#journey" className={ctaSecondary}>
                  See how it works
                </Link>
              </div>

              <p className="mt-7 max-w-md text-sm text-muted">
                No invented experience. No promised offers. Just a plan you can
                hold us to.
              </p>
            </div>

            <div className="reveal">
              <BandChart />
            </div>
          </div>
        </Container>
      </div>

      <div className="border-y border-line bg-paper">
        <Container className="grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal">
              <p className="nums font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </Container>
      </div>

      <Section id="journey">
        <SectionHeading
          title="One relationship across the whole journey"
          lede="A placement agency runs a short pipeline: candidate, vacancy, interview, placement. We run the longer one — including the parts that happen before anyone applies and after the offer is signed."
        />
        <JourneyTimeline />
        <div className="mt-14">
          <CoverageChart />
        </div>
        <p className="mt-8 max-w-2xl border-l-2 border-accent pl-5 text-sm leading-relaxed text-muted">
          The amber stages are the ones most firms leave out, and they are the
          whole reason a placement is worth anything a year later.
        </p>
      </Section>

      <Section id="services" className="bg-paper">
        <SectionHeading
          title="What we do"
          lede="Eight service layers that work as one process rather than a menu you have to assemble yourself."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.slug} className="reveal">
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_28px_55px_-28px_rgba(27,63,184,0.55)]"
              >
                <ServiceIcon slug={service.slug} />
                <h3 className="mt-5 font-display text-lg font-bold transition-colors group-hover:text-brand">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/services" className={ctaSecondary}>
            Read the detail on all eight
          </Link>
        </div>
      </Section>

      <Section id="distance">
        <SectionHeading
          title="The distance we work on"
          lede="A ₹6 lakh engineer and a ₹50 lakh engineer can have the same number of years behind them. The difference is what they built on top of that time — and how well they can show it."
        />
        <div className="mt-14">
          <BandLadder />
        </div>
      </Section>

      <Section id="who-we-work-with">
        <SectionHeading
          title="Who we work with"
          lede="The problems are different at each stage, so the work is different too. So is the band of the scale you are working on."
        />
        <div className="mt-14">
          <SegmentScale />
        </div>
      </Section>

      <section
        id="how-we-work"
        className="grain relative scroll-mt-20 overflow-hidden border-t border-line bg-ink text-white/75"
      >
        <div aria-hidden className="grid-bg-dark absolute inset-0" />
        <div
          aria-hidden
          className="drift glow -top-24 left-1/4 h-80 w-80 bg-brand/50"
        />
        <div
          aria-hidden
          className="drift glow -right-20 bottom-0 h-72 w-72 bg-accent/20"
          style={{ animationDelay: "-7s" }}
        />

        <Container className="relative py-20 sm:py-28">
          <div className="reveal max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-white sm:text-5xl">
              How we work
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              Career decisions involve a lot of trust. These are the lines we
              do not cross.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/[0.07] sm:p-7"
              >
                <h3 className="font-display text-xl font-extrabold text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-20 sm:py-28">
        <div className="grain relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand to-brand-bright px-8 py-14 text-white sm:px-14 sm:py-16">
          <div aria-hidden className="grid-bg-dark absolute inset-0" />
          <div
            aria-hidden
            className="drift glow -right-16 -bottom-20 h-72 w-72 bg-accent/40"
          />

          <div className="reveal relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] sm:text-5xl">
              Start with where you are
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              The first conversation is about your situation, not about selling
              you a package. Tell us where you are and what you are trying to
              reach, and we will tell you honestly whether we can help.
            </p>
            <p className="mt-4 text-sm text-white/70">
              In person across {site.locations.join(" · ")} — and online
              elsewhere in India.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3.5 font-display text-sm font-bold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-accent"
              >
                Book a consultation
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3.5 font-display text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                Email {site.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

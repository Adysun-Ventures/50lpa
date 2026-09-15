import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/content";

/** "Pune, Navi Mumbai and Thane" — for sentences, where a bare comma list reads wrong. */
const places = `${site.locations.slice(0, -1).join(", ")} and ${site.locations.at(-1)}`;

export const metadata: Metadata = {
  title: {
    absolute: "Contact 50LPA — Consultancy in Pune, Navi Mumbai & Thane",
  },
  description: `Talk to ${site.fullName} in ${places}. Write to ${site.email} for an honest first assessment of where you are and what comes next.`,
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  {
    title: "Tell us where you are",
    body: "Your experience, your current role, and what you are trying to reach. A paragraph is enough to start.",
  },
  {
    title: "We assess it honestly",
    body: "An initial conversation about your profile against the market — including the parts of the picture you may not want to hear.",
  },
  {
    title: "You get a plan and a price",
    body: "Which of the services you actually need, in what order, what it costs, and what we cannot promise you.",
  },
];

/** Every answer below restates copy that already appears on this page. */
const faqs = [
  {
    q: "Which cities does 50LPA work in?",
    a: `In person across ${places}. Candidates elsewhere in India are handled online — interviews, mock sessions and branding work are all done remotely as a matter of course.`,
  },
  {
    q: "What does 50LPA actually do?",
    a: "Career consulting, professional branding, industry and technology guidance, job-readiness preparation, placement assistance, interview support, offer guidance and post-placement mentorship — as one process rather than a menu.",
  },
  {
    q: "Does 50LPA guarantee a job?",
    a: "No. We do not guarantee employment, sell jobs, or invent experience, employers, projects or qualifications on your behalf. Placement depends on the market, the role and your interviews — anyone promising a guaranteed offer is selling you something else.",
  },
  {
    q: "Who does 50LPA work with?",
    a: "Freshers and recent graduates, experienced professionals, career switchers, people returning after a career break, and senior professionals. The problems are different at each stage, so the work is different too.",
  },
  {
    q: "What happens after I get in touch?",
    a: "Three steps. You tell us where you are, we assess your profile against the market honestly, and you get a plan and a price — with no obligation until you have seen both.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

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
              Contact
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              The first conversation is an assessment, not a sales call. We
              would rather tell you that we are not the right fit than take
              money for work you do not need.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="reveal rounded-2xl border border-line bg-white p-6">
              <h2 className="font-display text-sm font-bold">Email</h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-block font-display text-xl font-bold transition-colors hover:text-brand"
              >
                {site.email}
              </a>
              <p className="mt-2 text-sm text-muted">{site.hours}</p>
            </div>

            <div className="reveal rounded-2xl border border-line bg-white p-6">
              <h2 className="font-display text-sm font-bold">Where we work</h2>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {site.locations.map((place) => (
                  <li key={place}>{place}, Maharashtra</li>
                ))}
              </ul>
            </div>

            <div className="reveal rounded-2xl border border-line bg-white p-6">
              <h2 className="font-display text-sm font-bold">
                Elsewhere in India
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Consultations run online for candidates outside these cities.
                Interviews, mock sessions and branding work are all done
                remotely as a matter of course.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <SectionHeading
          title="What happens after you write to us"
          lede="Three steps, in this order. No obligation until you have seen the plan and the price."
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-3">
          {nextSteps.map((step, i) => (
            <li
              key={step.title}
              className="reveal rounded-2xl border border-line bg-paper p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:bg-white hover:shadow-[0_28px_55px_-28px_rgba(27,63,184,0.45)]"
            >
              <span className="nums font-display text-3xl font-bold text-brand/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="faq" className="bg-paper">
        <SectionHeading
          title="Questions we get asked"
          lede="Short answers here. The long ones belong in the first conversation."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="reveal rounded-2xl border border-line bg-white p-6 sm:p-7"
            >
              <h3 className="font-display text-lg font-bold">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <section className="grain relative scroll-mt-20 overflow-hidden border-t border-line bg-ink text-white/75">
        <div aria-hidden className="grid-bg-dark absolute inset-0" />
        <div
          aria-hidden
          className="drift glow -top-24 left-1/4 h-80 w-80 bg-brand/50"
        />

        <Container className="relative py-20 sm:py-28">
          <div className="reveal max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-white sm:text-5xl">
              What we are, and what we are not
            </h2>

            <dl className="mt-10 space-y-8">
              <div className="border-l-2 border-brand-bright pl-5">
                <dt className="font-display font-bold text-white">
                  We provide
                </dt>
                <dd className="mt-2 text-sm leading-relaxed">
                  Career consulting, professional branding, industry and
                  technology guidance, job-readiness preparation, placement
                  assistance, interview support, offer guidance and
                  post-placement mentorship.
                </dd>
              </div>
              <div className="border-l-2 border-accent pl-5">
                <dt className="font-display font-bold text-white">
                  We do not
                </dt>
                <dd className="mt-2 text-sm leading-relaxed">
                  Guarantee employment, sell jobs, or invent experience,
                  employers, projects or qualifications on your behalf.
                  Placement depends on the market, the role and your interviews
                  — anyone promising a guaranteed offer is selling you
                  something else.
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}

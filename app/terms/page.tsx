import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/chrome";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms on which ${site.fullName} provides career consulting, branding, placement and interview support.`,
  alternates: { canonical: "/terms" },
};

const updated = "15 September 2026";

/**
 * Refund, liability and jurisdiction are deliberately written to refer to the
 * per-engagement quote rather than stating figures this file has no basis for.
 * Anything that becomes a fixed number should be a decision, not an invention.
 */
const clauses: { heading: string; body: React.ReactNode[] }[] = [
  {
    heading: "Who these terms are between",
    body: [
      `These terms apply to the services provided by ${site.fullName} ("${site.name}", "we", "us") to you ("you", "the client"). By engaging us, you accept them.`,
    ],
  },
  {
    heading: "What we provide",
    body: [
      "Career consulting, professional branding, industry and technology guidance, job-readiness preparation, placement assistance, interview support, offer guidance and post-placement mentorship — run as one process rather than a menu of separate products.",
    ],
  },
  {
    heading: "What we do not do",
    body: [
      "We do not guarantee employment, and we do not sell jobs. Placement depends on the market, the role, and how your interviews go — none of which are ours to control.",
      "We do not invent experience, employers, projects or qualifications on your behalf. That is not a service we offer at any price.",
    ],
  },
  {
    heading: "What we need from you",
    body: [
      "Information that is accurate and genuinely yours. You must not ask us to present experience, credentials or achievements you do not have, and we will decline if you do.",
      "Timely responses, so that the work can move at the pace you are aiming for.",
    ],
  },
  {
    heading: "Fees",
    body: [
      "Every engagement is quoted in writing before any work begins. The quote sets out what is included, what it costs, and what we are not promising.",
      "Nothing is payable until you have seen that quote and agreed to it.",
    ],
  },
  {
    heading: "Refunds and cancellation",
    body: [
      "The refund terms that apply to you are the ones written into the quote you agree to. Because our work is staged, that quote also sets out how the fee corresponds to each stage, and what is returnable at each point.",
      "If we have not begun work, we do not keep your money.",
    ],
  },
  {
    heading: "Decisions stay yours",
    body: [
      "We provide assessment, advice, preparation and assistance. Decisions about your career, and about whether to accept an offer, are yours to make. We will give you our honest view — including when it is not what you were hoping to hear — but we will not make the decision for you.",
    ],
  },
  {
    heading: "Our responsibility",
    body: [
      "We are responsible for doing the work we have quoted for, to the standard we describe. We are not responsible for outcomes that depend on other people: an employer's hiring decision, a salary band, or the state of the market.",
      "Where liability cannot be excluded, our responsibility is limited to the fees you have paid us for the engagement in question.",
    ],
  },
  {
    heading: "Your information",
    body: [
      <>
        How we handle what you send us is set out in our{" "}
        <Link
          href="/privacy"
          className="font-medium text-brand underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of India, and disputes are subject to the jurisdiction of the courts at Pune, Maharashtra.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "If these terms change, the date at the top of this page changes with it. The terms that apply to your engagement are the ones in force at the time you agreed to it.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms go to ${site.email}.`],
  },
];

export default function TermsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated {updated}</p>

        <div className="mt-14 space-y-10">
          {clauses.map((clause) => (
            <section key={clause.heading}>
              <h2 className="font-display text-xl font-bold">
                {clause.heading}
              </h2>
              {clause.body.map((paragraph, i) => (
                <p key={i} className="mt-4 leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}

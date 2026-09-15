import type { Metadata } from "next";
import { Container } from "@/components/chrome";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.fullName} handles the information you send us, and what this website collects on its own when you visit.`,
  alternates: { canonical: "/privacy" },
};

const updated = "15 September 2026";

/**
 * Every clause describes something the site actually does — the enquiry inbox
 * and Google Analytics 4 are the only two routes by which information reaches
 * us. Nothing here should be widened without a matching change in the code.
 */
const clauses: { heading: string; body: string[] }[] = [
  {
    heading: "Who we are",
    body: [
      `${site.fullName} is a career development and placement consultancy working with candidates in Pune, Navi Mumbai and Thane, and online elsewhere in India. In this policy, "we" and "us" mean ${site.name}.`,
    ],
  },
  {
    heading: "What this policy covers",
    body: [
      "There are two ways we come to hold information about you: what you choose to send us, and what this website records on its own when you visit it.",
    ],
  },
  {
    heading: "What you send us",
    body: [
      `When you write to ${site.email}, we receive whatever you put in that message. In practice it is usually your name, how to reach you, a résumé or CV, your employment and education history, your current and expected compensation, and what you are looking for next.`,
      "We use it for one purpose: to assess your profile and provide the services you have asked about.",
    ],
  },
  {
    heading: "Career information in particular",
    body: [
      "A résumé is a detailed record of a person's working life, and we treat it as such. We do not sell it, publish it, or pass it to employers, recruiters or anyone else without your agreement — and then only for the specific opportunity you have agreed to pursue.",
      "Consistent with the rest of our work, we do not add to it. We do not invent employers, projects, qualifications or dates.",
    ],
  },
  {
    heading: "What the website records",
    body: [
      "This website uses Google Analytics 4 to understand how it is being used. It records which pages were viewed, roughly where in the world the visit came from (derived from your IP address), the device, operating system and browser involved, and the site or search that referred you here.",
      "We do not use it to identify you as an individual, and we do not combine it with anything you send us by email.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "Google Analytics sets cookies and similar identifiers in your browser so that a return visit can be recognised as the same one.",
      "You can block or delete cookies in your browser settings at any time, and Google publishes an opt-out browser add-on for Analytics if you would rather it did not run at all. The website works exactly the same either way — nothing on it depends on cookies.",
    ],
  },
  {
    heading: "Who else handles it",
    body: [
      "The companies that run our infrastructure handle this data as a necessary part of doing so: our website host, the provider that runs our email, and Google for Analytics. Each holds it only in order to provide that service.",
      "We do not sell personal information, and we do not share it for advertising.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep what you send us for as long as you are working with us, and for a reasonable period afterwards so that we can pick up a conversation you come back to. Analytics data is retained on the schedule set in our Analytics account.",
      "You can ask us to delete your information at any time, and we will.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      `Write to ${site.email} to ask what we hold about you, to correct it, or to have it deleted. We will respond, and we will not ask you why.`,
    ],
  },
  {
    heading: "Security",
    body: [
      "We take reasonable measures to protect what you send us. No method of transmission over the internet, or of electronic storage, is completely secure, so we cannot promise absolute security — only that we treat your information as carefully as we would want ours treated.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "If this policy changes, the date at the top of this page changes with it, and material changes will be reflected here rather than in a notice somewhere else.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about this policy go to ${site.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated {updated}</p>

        <div className="mt-14 space-y-10">
          {clauses.map((clause) => (
            <section key={clause.heading}>
              <h2 className="font-display text-xl font-bold">
                {clause.heading}
              </h2>
              {clause.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-muted">
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

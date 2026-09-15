export const site = {
  name: "50LPA",
  fullName: "50LPA Consultancy Services",
  tagline: "Career development & placement consultancy",
  domain: "50lpa.com",
  description:
    "Career development and placement consultancy in Pune, Navi Mumbai and Thane. Assessment, branding, interview preparation, placement and post-placement support.",
  // Confirm this inbox is live before launch — it is the only contact route on the site.
  email: "hello@50lpa.com",
  founded: "2025",
  hours: "Mon – Sat",
  locations: ["Pune", "Navi Mumbai", "Thane"],
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/#journey" },
  { label: "Contact", href: "/contact" },
];

/**
 * Salary bands, lowest first. The consultancy is named for the top of this
 * ladder, so the ladder itself is the brand's central image.
 */
export const bands = [
  { short: "₹3L", range: "₹3L – ₹6L", label: "First role", note: "Freshers, internships, first offer" },
  { short: "₹6L", range: "₹6L – ₹12L", label: "Early career", note: "1–4 years, specialising" },
  { short: "₹12L", range: "₹12L – ₹25L", label: "Mid-level", note: "Owning systems and outcomes" },
  { short: "₹25L", range: "₹25L – ₹50L", label: "Senior", note: "Leading people or platforms" },
  { short: "₹50L+", range: "₹50L+", label: "Where we're headed", note: "Scope, leverage, judgement" },
];

export const journey = [
  { step: "Assessment", note: "Where you are today, honestly" },
  { step: "Branding", note: "Résumé and profiles that match reality" },
  { step: "Strategy", note: "The role, the market, the timeline" },
  { step: "Readiness", note: "Skills, gaps, applications" },
  { step: "Matching", note: "Opportunities that actually fit" },
  { step: "Interview", note: "Mocks, feedback, repeat" },
  { step: "Placement", note: "Offer evaluation and the decision" },
  { step: "After", note: "Onboarding and the first 90 days" },
  { step: "Growth", note: "The next move, planned early" },
];

export type Service = {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "career-consulting",
    name: "Career consulting",
    summary: "Work out where you are and what the next move actually is.",
    detail:
      "Most people know they want something better and not much more than that. We start by making the picture specific: your experience, your stack, the market's demand for it, and the salary that demand supports.",
    points: [
      "Profile and experience assessment",
      "Target role, industry and location",
      "A realistic compensation range, with the reasoning",
      "A written roadmap with an order of operations",
    ],
  },
  {
    slug: "professional-branding",
    name: "Professional branding",
    summary: "One profile, expressed well, everywhere recruiters look.",
    detail:
      "Your experience does not change between platforms. Only the format does. We write it once, properly, then express it as a résumé, a Naukri profile, a LinkedIn profile and an Indeed profile.",
    points: [
      "ATS-oriented, role-specific résumés — including multiple versions for different roles",
      "Naukri profile restructuring, headline, summary and keyword optimisation",
      "LinkedIn headline, About, experience, skills and recruiter discoverability",
      "Indeed and job-portal profiles kept consistent with the rest",
    ],
  },
  {
    slug: "skill-and-industry-guidance",
    name: "Skill & industry guidance",
    summary: "What to learn, in what order, and why it matters for the role you want.",
    detail:
      "We are not a training institute. Our job is to look at what you know, look at what the target role asks for, name the gap, and tell you which parts of it to close first.",
    points: [
      "Market expectations for the target role and level",
      "A prioritised gap list instead of a course catalogue",
      "Technology guidance across engineering, data, cloud, security and design",
      "Perspective from people who do the job, not just people who advise on it",
    ],
  },
  {
    slug: "job-readiness",
    name: "Job readiness",
    summary: "Documentation and strategy aligned before you apply anywhere.",
    detail:
      "Applying a hundred times without a response is usually a positioning problem, not a volume problem. We fix the positioning, then decide where the applications should go.",
    points: [
      "Résumé and profiles finalised and consistent",
      "Role selection matched to your actual level",
      "Application strategy: which companies, which channels, in what order",
      "How to present your experience so it reads at your level",
    ],
  },
  {
    slug: "placement-assistance",
    name: "Placement assistance",
    summary: "Opportunities matched to your skills, level, location and target.",
    detail:
      "Not every vacancy is worth your time, and not every candidate fits every role. We work on alignment — your skills and expectations against what the role actually needs.",
    points: [
      "Role targeting across your preferred locations and industries",
      "Opportunity identification and employer coordination",
      "Application and follow-up support",
      "Interview scheduling",
    ],
  },
  {
    slug: "interview-support",
    name: "Interview support",
    summary: "Mock interviews with feedback, not just advice to be confident.",
    detail:
      "Preparation becomes measurable when it runs as a loop: interview, evaluate, give feedback, build an improvement plan, interview again. You should be able to see the difference between the first mock and the second.",
    points: [
      "HR, technical, managerial and behavioural rounds",
      "Coding, system design and project discussions",
      "Mock interviews with written feedback",
      "Communication coaching where it is the actual blocker",
    ],
  },
  {
    slug: "offer-guidance",
    name: "Offer guidance",
    summary: "Judge the whole offer, not the number at the top of it.",
    detail:
      "Two offers with the same CTC are rarely worth the same. We break down what you are actually being paid, what you are being asked to do, and where it puts you in three years.",
    points: [
      "Fixed, variable, bonus and ESOP structure",
      "Role, technology stack, work model and location",
      "Team, reporting line and growth trajectory",
      "Notice period, stability and long-term positioning",
    ],
  },
  {
    slug: "post-placement-support",
    name: "Post-placement support",
    summary: "Placement is the start of the next stage, not the finish line.",
    detail:
      "Most consultancies stop at the offer. We keep going through the part that decides whether the move was worth it — the first months in the role.",
    points: [
      "Joining and onboarding guidance",
      "A first-90-days plan",
      "Manager communication and workplace expectations",
      "Skill development and internal growth",
      "Planning the next move before you need it",
    ],
  },
];

/**
 * `from`/`to` are indices into `bands` — the span of the scale each group
 * occupies when they come to us. Descriptive, not a promise.
 */
export const segments = [
  {
    name: "Freshers",
    from: 0,
    to: 1,
    note: "Students and recent graduates who need a first résumé, a direction, and a realistic picture of the market they are entering.",
  },
  {
    name: "Experienced professionals",
    from: 1,
    to: 3,
    note: "People with a track record who want better positioning, better compensation, or a move into a stronger role.",
  },
  {
    name: "Career switchers",
    from: 1,
    to: 2,
    note: "Moving between industries, functions, technologies or job roles — where the résumé needs to be rewritten, not just updated.",
  },
  {
    name: "Returning professionals",
    from: 0,
    to: 2,
    note: "Coming back after a career break, relocation or education, and needing the gap handled honestly and confidently.",
  },
  {
    name: "Senior professionals",
    from: 3,
    to: 4,
    note: "Executive positioning, leadership branding and strategic transitions at the level where judgement is the product.",
  },
];

export const principles = [
  {
    title: "We don't invent anything",
    body: "Your experience is presented better, not fabricated. No invented employers, projects, titles or achievements — ever. It is the one thing a consultancy like this cannot trade away.",
  },
  {
    title: "Experts who've done the job",
    body: "Guidance comes from engineers, managers, analysts and executives who have worked in the roles you are targeting. Not from a script.",
  },
  {
    title: "AI-assisted, human-decided",
    body: "Software handles the analysis — keyword gaps, job-description matching, profile consistency. A person makes the judgement calls and owns the recommendation.",
  },
  {
    title: "We stay after the offer",
    body: "Onboarding, the first ninety days, and the next move. The relationship is meant to outlast the placement.",
  },
];

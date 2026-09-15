import { bands, journey, segments, site } from "@/lib/content";

/* Bar heights as a share of the chart area, low band first. */
const heights = [24, 38, 54, 74, 100];

const fills = [
  "rgba(27,63,184,0.16)",
  "rgba(27,63,184,0.30)",
  "rgba(27,63,184,0.48)",
  "rgba(79,123,255,0.85)",
  "linear-gradient(0deg, #4f7bff 0%, #ffb020 100%)",
];

export function BandChart() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="drift glow -top-16 -left-10 h-56 w-56 bg-brand-bright/30"
      />
      <div
        aria-hidden
        className="drift glow -right-6 -bottom-12 h-52 w-52 bg-accent/35"
        style={{ animationDelay: "-6s" }}
      />

      <figure className="relative rounded-2xl border border-line bg-white/80 p-6 shadow-[0_24px_60px_-30px_rgba(7,12,24,0.35)] backdrop-blur-sm sm:p-7">
        <figcaption className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-base font-bold">Salary bands</p>
            <p className="mt-1 text-xs text-muted">
              Where people start, and where this ends up
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-ink">
            Target
          </span>
        </figcaption>

        <div className="grid-bg relative mt-7 h-52 rounded-lg sm:h-60">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 border-t border-dashed border-brand/30"
          />

          <div className="flex h-full items-end gap-2 px-1 sm:gap-4">
            {bands.map((band, i) => (
              <div key={band.short} className="flex h-full flex-1 items-end">
                <div
                  className="bar relative w-full rounded-t-md"
                  style={{
                    height: `${heights[i]}%`,
                    background: fills[i],
                    animationDelay: `${i * 110}ms`,
                  }}
                >
                  {i === bands.length - 1 ? (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2">
                      <span
                        aria-hidden
                        className="ring absolute inset-0 rounded-full bg-accent"
                      />
                      <span className="relative block size-2.5 rounded-full bg-accent ring-4 ring-accent/25" />
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex gap-2 px-1 sm:gap-4">
          {bands.map((band) => (
            <span
              key={band.short}
              className="nums flex-1 text-center text-[0.6875rem] font-semibold text-muted sm:text-xs"
            >
              {band.short}
            </span>
          ))}
        </div>
      </figure>

      <p className="mt-4 text-center text-xs text-muted">
        Illustrative — the shape of the climb, not a quotation.
      </p>
    </div>
  );
}

/* Where most agencies stop. Steps 8 and 9 are the ones they leave out. */
const AGENCY_REACH = 7;

export function CoverageChart() {
  const total = journey.length;
  const rows = [
    { label: "Typical placement agency", reach: AGENCY_REACH, ours: false },
    { label: site.fullName, reach: total, ours: true },
  ];

  return (
    <figure className="reveal rounded-2xl border border-line bg-paper p-6 sm:p-8">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-display text-base font-bold">Coverage</p>
        <p className="text-xs text-muted">
          Stages of the journey a firm actually runs
        </p>
      </figcaption>

      <div className="mt-7 space-y-6">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-display text-sm font-bold">{row.label}</p>
              <p className="nums text-xs font-semibold text-muted">
                {row.reach} of {total}
              </p>
            </div>
            <div className="mt-2.5 flex gap-1">
              {journey.map((step, i) => (
                <span
                  key={step.step}
                  className={`h-2.5 flex-1 rounded-full ${
                    i < row.reach
                      ? row.ours && i >= AGENCY_REACH
                        ? "bg-accent"
                        : "bg-brand"
                      : "bg-line"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-1">
        {journey.map((step, i) => (
          <span
            key={step.step}
            className={`nums flex-1 text-center text-[0.625rem] font-semibold ${
              i >= AGENCY_REACH ? "text-accent" : "text-muted"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
        ))}
      </div>
    </figure>
  );
}

const BAND_COLS = bands.length;

export function SegmentScale() {
  const rows = [...segments].sort((a, b) => a.from - b.from || a.to - b.to);

  return (
    <figure className="reveal">
      <div className="divide-y divide-line border-y border-line">
        {rows.map((segment) => {
          const left = (segment.from / BAND_COLS) * 100;
          const width = ((segment.to + 1 - segment.from) / BAND_COLS) * 100;

          return (
            <div
              key={segment.name}
              className="grid gap-4 py-6 sm:grid-cols-[1fr_15rem] sm:items-center sm:gap-10"
            >
              <div>
                <p className="font-display text-lg font-bold">{segment.name}</p>
                <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted">
                  {segment.note}
                </p>
              </div>

              <div className="relative h-3 rounded-full border border-line bg-paper">
                <span
                  className="absolute inset-y-[3px] rounded-full bg-gradient-to-r from-brand to-brand-bright"
                  style={{
                    left: `calc(${left}% + 3px)`,
                    width: `calc(${width}% - 6px)`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 hidden sm:grid sm:grid-cols-[1fr_15rem] sm:gap-10">
        <span />
        <div className="flex">
          {bands.map((band) => (
            <span
              key={band.short}
              className="nums flex-1 text-center text-[0.6875rem] font-semibold text-muted"
            >
              {band.short}
            </span>
          ))}
        </div>
      </div>

      <figcaption className="mt-5 text-xs text-muted">
        Illustrative — the span of the scale each group usually occupies when
        they come to us. The groups overlap; this is not a rule.
      </figcaption>
    </figure>
  );
}

const icons: Record<string, React.ReactNode> = {
  "career-consulting": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.6 8.4 10 10l-1.6 5.6L14 14z" />
    </>
  ),
  "professional-branding": (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <circle cx="8.5" cy="11" r="2" />
      <path d="M4.8 16.2c.7-1.4 2-2.2 3.7-2.2s3 .8 3.7 2.2" />
      <path d="M15.5 9.5H19M15.5 13H19" />
    </>
  ),
  "skill-and-industry-guidance": (
    <>
      <path d="M3 20.5h18" />
      <path d="M6.5 20.5V14M11 20.5V9M15.5 20.5v-4.5M20 20.5V4" />
    </>
  ),
  "job-readiness": (
    <>
      <path d="M4 6l1.6 1.6L8.4 4.8M4 12.5l1.6 1.6 2.8-2.8M4 19l1.6 1.6 2.8-2.8" />
      <path d="M11.5 6.2H20M11.5 12.7H20M11.5 19.2H20" />
    </>
  ),
  "placement-assistance": (
    <>
      <circle cx="12" cy="12" r="2.6" />
      <circle cx="12" cy="4" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M12 6v3.4M9.9 13.8 6.6 17.5M14.1 13.8l3.3 3.7" />
    </>
  ),
  "interview-support": (
    <>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3.5M8.5 21.5h7" />
    </>
  ),
  "offer-guidance": (
    <>
      <path d="M12 3v17M7 20.5h10" />
      <path d="M4.5 7.5h15" />
      <path d="M4.5 7.5 2.5 13a3 3 0 0 0 6 0z" />
      <path d="M19.5 7.5 21.5 13a3 3 0 0 1-6 0z" />
    </>
  ),
  "post-placement-support": (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M3.5 16 9 10.5l3.6 3.2L20.5 5" />
      <path d="M20.5 9.5V5h-4.5" />
    </>
  ),
};

export function ServiceIcon({ slug }: { slug: string }) {
  return (
    <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand/12 to-brand-bright/20 text-brand ring-1 ring-inset ring-brand/15">
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[slug]}
      </svg>
    </span>
  );
}

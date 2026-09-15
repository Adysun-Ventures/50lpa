import { bands, journey } from "@/lib/content";

const bandSkin = [
  "border-line bg-white text-ink",
  "border-line bg-paper text-ink",
  "border-line bg-brand/10 text-ink",
  "border-brand-deep bg-brand text-white",
  "border-accent bg-gradient-to-r from-accent to-[#ffc857] text-ink",
];

const bandPad = ["py-5", "py-6", "py-7", "py-9", "py-11"];

/**
 * The ladder of salary bands, lowest at the bottom. This is the page's one
 * loud element — everything around it stays quiet.
 */
export function BandLadder() {
  const topDown = bands.map((band, index) => ({ band, index })).reverse();

  return (
    <div className="space-y-2.5">
      {topDown.map(({ band, index }) => {
        const noteTone =
          index === bands.length - 1
            ? "text-ink/75"
            : index === bands.length - 2
              ? "text-white/75"
              : "text-muted";
        return (
          <div
            key={band.range}
            className={`band flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-xl border px-5 sm:px-7 ${bandSkin[index]} ${bandPad[index]}`}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <span className="nums font-display text-2xl font-bold sm:text-4xl">
              {band.range}
            </span>
            <span
              className={`order-last w-full text-sm sm:order-none sm:w-auto ${noteTone}`}
            >
              {band.note}
            </span>
            <span className="font-display text-sm font-bold sm:text-lg">
              {band.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* Steps 8 and 9 are the ones most agencies never reach. */
const POST_PLACEMENT_FROM = 7;

export function JourneyTimeline() {
  return (
    <ol className="mt-14">
      {journey.map((item, i) => {
        const isPost = i >= POST_PLACEMENT_FROM;
        return (
          <li key={item.step} className="reveal flex gap-5 sm:gap-7">
            <div className="flex flex-col items-center">
              <span
                className={`mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_6px_18px_-8px_rgba(7,12,24,0.5)] ${
                  isPost ? "border-accent" : "border-brand/30"
                }`}
              >
                <span
                  className={`size-3 rounded-full ${
                    isPost ? "bg-accent" : "bg-brand"
                  }`}
                />
              </span>
              {i < journey.length - 1 ? (
                <span
                  aria-hidden
                  className="rail-progress mt-1 w-0.5 flex-1 rounded-full bg-gradient-to-b from-brand-bright to-brand"
                  style={{ transitionDelay: `${i * 90}ms` }}
                />
              ) : null}
            </div>

            <div
              className={`flex flex-1 flex-col gap-1 ${
                i < journey.length - 1 ? "pb-8" : "pb-0"
              } sm:flex-row sm:items-baseline sm:gap-8`}
            >
              <span className="nums shrink-0 text-xs font-bold text-muted sm:w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="shrink-0 font-display text-xl font-bold sm:w-56 sm:text-2xl">
                {item.step}
              </h3>
              <p className="text-sm leading-relaxed text-muted sm:flex-1 sm:pt-1">
                {item.note}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

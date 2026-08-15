import type { DimensionId } from '../data/types';

/*
 * Dimensions are told apart by icon, never by colour.
 *
 * Colour in CARA carries exactly one meaning: readiness level. Giving each
 * dimension its own hue would put a second colour language on the same screen,
 * and a reader would reasonably mistake a dimension's identity colour for its
 * score. So every icon renders in the same ink, and shape does the work.
 */
const paths: Record<DimensionId, React.ReactNode> = {
  // A raised flag: someone has planted this and put their name to it.
  lead: (
    <>
      <path d="M5 21V4" />
      <path d="M5 5c4.5-2.2 9 2.2 13.5 0v8c-4.5 2.2-9-2.2-13.5 0" />
    </>
  ),
  // A target: the specific piece of work you are aiming Copilot at.
  case: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  // People, one in front: the cohort and how ready they are to engage.
  ppl: (
    <>
      <circle cx="9.5" cy="8" r="3.2" />
      <path d="M3.5 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16.5 5.6a3.2 3.2 0 0 1 0 6.2" />
      <path d="M18.5 14.4c1.8.9 3 2.9 3 5.6" />
    </>
  ),
  // A lamp: capability, and knowing when the idea is a good one.
  skill: (
    <>
      <path d="M12 3a6 6 0 0 0-3.8 10.7c.7.6 1.1 1.4 1.2 2.3h5.2c.1-.9.5-1.7 1.2-2.3A6 6 0 0 0 12 3Z" />
      <path d="M10 19h4" />
      <path d="M10.8 21.5h2.4" />
    </>
  ),
  // A hub with spokes: champions, training and support reaching the cohort.
  enab: (
    <>
      <circle cx="12" cy="4.8" r="2.4" />
      <circle cx="5" cy="19.2" r="2.4" />
      <circle cx="19" cy="19.2" r="2.4" />
      <path d="M12 7.2v3.6" />
      <path d="M11 11.6 6.4 17.2" />
      <path d="M13 11.6l4.6 5.6" />
    </>
  ),
  // Rising bars: whether the pilot can produce an answer at all.
  meas: (
    <>
      <path d="M4 20.5h16" />
      <path d="M6.5 20.5v-6" />
      <path d="M12 20.5V9" />
      <path d="M17.5 20.5V4.5" />
    </>
  ),
};

export default function DimensionIcon({
  id,
  className,
}: {
  id: DimensionId;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[id]}
    </svg>
  );
}

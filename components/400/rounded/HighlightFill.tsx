import * as React from "react";
import type { SVGProps } from "react";
const SvgHighlightFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m204-676-43-42q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l42 42q8 9 8.5 21t-8.5 21q-9 9-21 8.5t-21-8.5m246-114v-60q0-13 8.5-21.5T480-880q13 0 21.5 8.5T510-850v60q0 13-8.5 21.5T480-760q-13 0-21.5-8.5T450-790m264 73 43-43q9-8 21-8t21 9q9 9 9 21t-9 21l-43 43q-9 9-21 9t-21-9q-9-9-9-21.5t9-21.5M360-140v-140L258-382q-8-8-13-19.5t-5-23.5v-115q0-25 17.5-42.5T300-600h360q25 0 42.5 17.5T720-540v115q0 12-5 23.5T702-382L600-280v140q0 25-17.5 42.5T540-80H420q-25 0-42.5-17.5T360-140" />
  </svg>
);
export default SvgHighlightFill;

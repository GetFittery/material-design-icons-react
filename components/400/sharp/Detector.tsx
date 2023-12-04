import * as React from "react";
import type { SVGProps } from "react";
const SvgDetector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-120q-88 0-168.5-33T169-249l43-43q54 54 123 83t145 29q76 0 145.5-28.5T749-291l42 42q-63 62-143 95.5T480-120m0-160q-56 0-107.5-21T282-363l42-41q31 32 71.5 48t84.5 16q44 0 84.5-16t71.5-48l42 42q-39 40-90.5 61T480-280M180-780v60h600v-60zm121 120 18 60h322l18-60zm-26 120-38-120H120v-180h720v180H723l-44 120zm-95-240v60z" />
  </svg>
);
export default SvgDetector;

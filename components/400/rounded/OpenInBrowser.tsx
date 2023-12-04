import * as React from "react";
import type { SVGProps } from "react";
const SvgOpenInBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H600q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T600-180h180v-540H180v540h180q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T360-120zm270-30v-254l-62 62q-9 9-21 9t-21.391-9Q337-351 337-363.5t9-21.5l113-114q5-5 10.133-7 5.134-2 11-2Q486-508 491-506q5 2 10 7l114 114q9 9 9 21t-8.609 21q-9.391 9-21.891 9-12.5 0-21.5-9l-62-61v254q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T450-150" />
  </svg>
);
export default SvgOpenInBrowser;

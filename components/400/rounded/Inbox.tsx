import * as React from "react";
import type { SVGProps } from "react";
const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-136H634q-26 40-67.5 61.5T480-233q-45 0-86.5-21.5T326-316H180zm300.017-113Q515-293 544.5-310.5 574-328 591-359q7-10 18.5-13.5T633-376h147v-404H180v404h147q12 0 23.5 3.5T369-359q17 31 46.517 48.5 29.517 17.5 64.5 17.5M180-180h600z" />
  </svg>
);
export default SvgInbox;

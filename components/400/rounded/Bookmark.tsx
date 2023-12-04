import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m480-240-196 84q-30 13-57-4.756-27-17.755-27-50.244v-574q0-24 18-42t42-18h440q24 0 42 18t18 42v574q0 32.489-27 50.244Q706-143 676-156zm0-64 220 93v-574H260v574zm0-481H260h440z" />
  </svg>
);
export default SvgBookmark;

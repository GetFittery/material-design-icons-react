import * as React from "react";
import type { SVGProps } from "react";
const SvgDynamicFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-120q-24 0-42-18t-18-42v-341q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T140-521v341h422q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T562-120zm121-120q-24 0-42.5-18T200-300v-341q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T260-641v341h423q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T683-240zm119-120q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h440q24 0 42 18t18 42v360q0 24-18 42t-42 18zm0-60h440v-298H380z" />
  </svg>
);
export default SvgDynamicFeed;

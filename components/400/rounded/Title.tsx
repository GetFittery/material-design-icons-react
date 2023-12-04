import * as React from "react";
import type { SVGProps } from "react";
const SvgTitle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M430-700H250q-20.833 0-35.417-14.618Q200-729.235 200-750.118 200-771 214.583-785.5 229.167-800 250-800h460q20.833 0 35.417 14.618Q760-770.765 760-749.882 760-729 745.417-714.5 730.833-700 710-700H530v490q0 20.833-14.618 35.417Q500.765-160 479.882-160 459-160 444.5-174.583 430-189.167 430-210z" />
  </svg>
);
export default SvgTitle;

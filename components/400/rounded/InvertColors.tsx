import * as React from "react";
import type { SVGProps } from "react";
const SvgInvertColors = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-120q-132 0-226-91.5T160-435q0-66 25-122.5T254-658l194-191q7-7 15.5-10t16.5-3q8 0 16.5 3t15.5 10l194 191q44 44 69 100.5T800-435q0 131-93.5 223T480-120m0-60v-616L294-613q-36 36-55 80t-19 98q0 107 76.5 181T480-180" />
  </svg>
);
export default SvgInvertColors;

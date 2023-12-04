import * as React from "react";
import type { SVGProps } from "react";
const SvgDirections = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-360h60v-130h184v85l116-115-116-116v86H350q-12.75 0-21.375 8.625T320-520zM479.949-77Q468-77 456.5-81 445-85 437-93L93-437q-8-8-12-19.551-4-11.551-4-23.5t4-23.449Q85-515 93-523l344-344q8-8 19.551-12 11.551-4 23.5-4t23.449 4q11.5 4 19.5 12l344 344q8 8 12 19.551 4 11.551 4 23.5t-4 23.449q-4 11.5-12 19.5L523-93q-8 8-19.551 12-11.551 4-23.5 4M308-308l172 172 344-344-344-344-344 344zm172-172" />
  </svg>
);
export default SvgDirections;

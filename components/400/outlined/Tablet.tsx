import * as React from "react";
import type { SVGProps } from "react";
const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M100-160q-24.75 0-42.375-17.625T40-220v-520q0-24.75 17.625-42.375T100-800h760q24.75 0 42.375 17.625T920-740v520q0 24.75-17.625 42.375T860-160zm30-580h-30v520h30zm60 520h580v-520H190zm640-520v520h30v-520zm0 0h30zm-700 0h-30z" />
  </svg>
);
export default SvgTablet;

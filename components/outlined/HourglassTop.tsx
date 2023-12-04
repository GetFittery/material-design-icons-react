import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglassTop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m6 2 .01 6L10 12l-3.99 4.01L6 22h12v-6l-4-4 4-3.99V2zm10 14.5V20H8v-3.5l4-4z" />
  </svg>
);
export default SvgHourglassTop;

import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterNone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14z" />
  </svg>
);
export default SvgFilterNone;
import * as React from "react";
import type { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m15.96 10.29-2.75 3.54-1.96-2.36L8.5 15h11zM3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14z" />
  </svg>
);
export default SvgFilter;
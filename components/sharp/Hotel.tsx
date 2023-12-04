import * as React from "react";
import type { SVGProps } from "react";
const SvgHotel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3m16-6H11v7H3V5H1v15h2v-3h18v3h2z" />
  </svg>
);
export default SvgHotel;

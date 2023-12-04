import * as React from "react";
import type { SVGProps } from "react";
const SvgDateRange = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 11H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm4-7h-3V2h-2v2H8V2H6v2H3v18h18zm-2 16H5V9h14z" />
  </svg>
);
export default SvgDateRange;
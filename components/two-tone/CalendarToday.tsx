import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarToday = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v3H4V5zM4 21V10h16v11z" />
    <path d="M4 5.01h16V8H4z" opacity={0.3} />
  </svg>
);
export default SvgCalendarToday;

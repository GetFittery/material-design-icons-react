import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" />
  </svg>
);
export default SvgCalendarViewDay;

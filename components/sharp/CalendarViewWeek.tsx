import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 4H2v16h20zm-9 2h2.5v12H13zm-2 12H8.5V6H11zM4 6h2.5v12H4zm16 12h-2.5V6H20z" />
  </svg>
);
export default SvgCalendarViewWeek;

import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarToday = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 3h-3V1h-2v2H7V1H5v2H2v20h20zm-2 18H4V8h16z" />
  </svg>
);
export default SvgCalendarToday;

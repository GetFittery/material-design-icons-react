import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M8.5 6H11v12H8.5zM13 6h2.5v12H13zM4 6h2.5v12H4zm13.5 0H20v12h-2.5z"
      opacity={0.3}
    />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M6.5 18H4V6h2.5zm4.5 0H8.5V6H11zm4.5 0H13V6h2.5zm4.5 0h-2.5V6H20z" />
  </svg>
);
export default SvgCalendarViewWeek;

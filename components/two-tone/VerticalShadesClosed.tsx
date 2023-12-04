import * as React from "react";
import type { SVGProps } from "react";
const SvgVerticalShadesClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M9.5 5H11v14H9.5zM6 5h1.5v14H6zm7 0h1.5v14H13zm3.5 0H18v14h-1.5z"
      opacity={0.2}
    />
    <path d="M20 19V3H4v16H2v2h20v-2zM7.5 19H6V5h1.5zm3.5 0H9.5V5H11zm3.5 0H13V5h1.5zm3.5 0h-1.5V5H18z" />
  </svg>
);
export default SvgVerticalShadesClosed;

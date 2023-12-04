import * as React from "react";
import type { SVGProps } from "react";
const SvgVerticalShades = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20 19V3H4v16H2v2h20v-2zM14 5v14h-4V5zM6 5h2v14H6zm10 14V5h2v14z" />
  </svg>
);
export default SvgVerticalShades;
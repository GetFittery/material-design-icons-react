import * as React from "react";
import type { SVGProps } from "react";
const SvgStairs = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 3v18h18V3zm15 5h-2.42v3.33H13v3.33h-2.58V18H6v-2h2.42v-3.33H11V9.33h2.58V6H18z" />
  </svg>
);
export default SvgStairs;

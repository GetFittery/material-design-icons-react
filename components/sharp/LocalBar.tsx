import * as React from "react";
import type { SVGProps } from "react";
const SvgLocalBar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5zM7.43 7 5.66 5h12.69l-1.78 2z" />
  </svg>
);
export default SvgLocalBar;
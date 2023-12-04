import * as React from "react";
import type { SVGProps } from "react";
const SvgVerticalSplit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 15h8v-2H3zm0 4h8v-2H3zm0-8h8V9H3zm0-6v2h8V5zm10 0h8v14h-8z" />
  </svg>
);
export default SvgVerticalSplit;

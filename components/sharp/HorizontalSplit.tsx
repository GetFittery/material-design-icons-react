import * as React from "react";
import type { SVGProps } from "react";
const SvgHorizontalSplit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 19h18v-6H3zm0-8h18V9H3zm0-6v2h18V5z" />
  </svg>
);
export default SvgHorizontalSplit;

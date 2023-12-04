import * as React from "react";
import type { SVGProps } from "react";
const SvgReorder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 15h18v-2H3zm0 4h18v-2H3zm0-8h18V9H3zm0-6v2h18V5z" />
  </svg>
);
export default SvgReorder;

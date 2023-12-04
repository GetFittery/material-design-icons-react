import * as React from "react";
import type { SVGProps } from "react";
const SvgVerticalSplit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15 7h4v10h-4z" opacity={0.3} />
    <path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5zm6 12h-4V7h4z" />
  </svg>
);
export default SvgVerticalSplit;

import * as React from "react";
import type { SVGProps } from "react";
const SvgVerticalSplit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm16 2v10h-4V7zm2-2h-8v14h8z" />
  </svg>
);
export default SvgVerticalSplit;

import * as React from "react";
import type { SVGProps } from "react";
const SvgHorizontalSplit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 15v2H5v-2zm2-10H3v2h18zm0 4H3v2h18zm0 4H3v6h18z" />
    <path d="M5 15h14v2H5z" opacity={0.3} />
  </svg>
);
export default SvgHorizontalSplit;

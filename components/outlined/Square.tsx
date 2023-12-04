import * as React from "react";
import type { SVGProps } from "react";
const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 3v18h18V3zm16 16H5V5h14z" />
  </svg>
);
export default SvgSquare;

import * as React from "react";
import type { SVGProps } from "react";
const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 3h18v18H3z" />
  </svg>
);
export default SvgSquare;

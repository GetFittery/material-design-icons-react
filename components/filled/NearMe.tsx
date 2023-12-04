import * as React from "react";
import type { SVGProps } from "react";
const SvgNearMe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98z" />
  </svg>
);
export default SvgNearMe;

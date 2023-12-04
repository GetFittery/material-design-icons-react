import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z" />
  </svg>
);
export default SvgHexagon;

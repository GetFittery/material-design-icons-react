import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDropDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m7 10 5 5 5-5z" />
  </svg>
);
export default SvgArrowDropDown;
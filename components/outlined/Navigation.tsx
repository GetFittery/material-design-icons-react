import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m12 7.27 4.28 10.43-3.47-1.53-.81-.36-.81.36-3.47 1.53zM12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
  </svg>
);
export default SvgNavigation;

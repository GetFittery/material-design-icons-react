import * as React from "react";
import type { SVGProps } from "react";
const SvgViewColumn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 5v14h18V5zm5.33 12H5V7h3.33zm5.34 0h-3.33V7h3.33zM19 17h-3.33V7H19z" />
  </svg>
);
export default SvgViewColumn;

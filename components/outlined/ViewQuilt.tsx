import * as React from "react";
import type { SVGProps } from "react";
const SvgViewQuilt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 5v14h18V5zm5.33 12H5V7h3.33zm5.34 0h-3.33v-4h3.33zM19 17h-3.33v-4H19zm0-6h-8.67V7H19z" />
  </svg>
);
export default SvgViewQuilt;

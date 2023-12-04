import * as React from "react";
import type { SVGProps } from "react";
const SvgPowerInput = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M2 9v2h19V9zm0 6h5v-2H2zm7 0h5v-2H9zm7 0h5v-2h-5z" />
  </svg>
);
export default SvgPowerInput;

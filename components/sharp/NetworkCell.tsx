import * as React from "react";
import type { SVGProps } from "react";
const SvgNetworkCell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M2 22h20V2zm18-2h-3V9.83l3-3z" />
  </svg>
);
export default SvgNetworkCell;

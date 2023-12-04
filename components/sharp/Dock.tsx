import * as React from "react";
import type { SVGProps } from "react";
const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M8 23h8v-2H8zM18 1.01 6 1v18h12zM16 15H8V5h8z" />
  </svg>
);
export default SvgDock;

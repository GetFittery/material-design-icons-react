import * as React from "react";
import type { SVGProps } from "react";
const SvgNoCell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21.19 21.19 2.81 2.81 1.39 4.22 5 7.83V23h14v-1.17l.78.78zM7 18V9.83L15.17 18zM8.83 6 5 2.17V1h14v15.17l-2-2V6z" />
  </svg>
);
export default SvgNoCell;
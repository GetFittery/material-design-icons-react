import * as React from "react";
import type { SVGProps } from "react";
const SvgWineBar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3zm10 5H8V5h8z" />
  </svg>
);
export default SvgWineBar;
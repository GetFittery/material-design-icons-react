import * as React from "react";
import type { SVGProps } from "react";
const SvgPadding = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 3v18h18V3zm6 6H7V7h2zm4 0h-2V7h2zm4 0h-2V7h2z" />
  </svg>
);
export default SvgPadding;

import * as React from "react";
import type { SVGProps } from "react";
const SvgShop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M16 6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6zm-6-2h4v2h-4zM9 18V9l7.5 4z" />
  </svg>
);
export default SvgShop;

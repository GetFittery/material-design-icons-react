import * as React from "react";
import type { SVGProps } from "react";
const SvgCases = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 5V1h-8v4H5v13h18V5zm-2 0h-4V3h4zM3 9H1v13h18v-2H3z" />
  </svg>
);
export default SvgCases;
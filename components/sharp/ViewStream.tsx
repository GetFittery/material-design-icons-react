import * as React from "react";
import type { SVGProps } from "react";
const SvgViewStream = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 19v-6h18v6zM3 5v6h18V5z" />
  </svg>
);
export default SvgViewStream;

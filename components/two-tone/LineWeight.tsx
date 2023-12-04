import * as React from "react";
import type { SVGProps } from "react";
const SvgLineWeight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 17h18v-2H3zm0 3h18v-1H3zm0-7h18v-3H3zm0-9v4h18V4z" />
  </svg>
);
export default SvgLineWeight;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28z" />
  </svg>
);
export default SvgBolt;
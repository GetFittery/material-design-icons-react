import * as React from "react";
import type { SVGProps } from "react";
const SvgMan2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M14 7h-4c-1.1 0-2 .9-2 2v6h2.5v7h3v-7H16V9c0-1.1-.9-2-2-2" />
    <circle cx={12} cy={4} r={2} />
  </svg>
);
export default SvgMan2;

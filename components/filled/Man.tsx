import * as React from "react";
import type { SVGProps } from "react";
const SvgMan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2" />
    <circle cx={12} cy={4} r={2} />
  </svg>
);
export default SvgMan;

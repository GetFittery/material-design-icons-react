import * as React from "react";
import type { SVGProps } from "react";
const SvgMan2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M16 7H8v8h2.5v7h3v-7H16z" />
    <circle cx={12} cy={4} r={2} />
  </svg>
);
export default SvgMan2;

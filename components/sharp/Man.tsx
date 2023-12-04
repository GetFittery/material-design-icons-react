import * as React from "react";
import type { SVGProps } from "react";
const SvgMan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M16 7H8v8h2v7h4v-7h2z" />
    <circle cx={12} cy={4} r={2} />
  </svg>
);
export default SvgMan;
import * as React from "react";
import type { SVGProps } from "react";
const SvgCoffeeMaker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 7V4h2V2H4v20h16v-2h-4.03A4.966 4.966 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v3z" />
    <circle cx={13} cy={9} r={1} />
  </svg>
);
export default SvgCoffeeMaker;

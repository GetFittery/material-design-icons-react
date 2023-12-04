import * as React from "react";
import type { SVGProps } from "react";
const SvgComputer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m20 18 2-2V4H2v12l2 2H0v2h24v-2zM4 6h16v10H4z" />
  </svg>
);
export default SvgComputer;
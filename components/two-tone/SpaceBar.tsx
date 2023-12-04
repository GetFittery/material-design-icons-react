import * as React from "react";
import type { SVGProps } from "react";
const SvgSpaceBar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 13H6V9H4v6h16V9h-2z" />
  </svg>
);
export default SvgSpaceBar;

import * as React from "react";
import type { SVGProps } from "react";
const SvgViewComfy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M2 4v16h20V4zm2 2h16v5H4zm0 12v-5h4v5zm6 0v-5h10v5z" />
  </svg>
);
export default SvgViewComfy;

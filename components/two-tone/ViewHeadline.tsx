import * as React from "react";
import type { SVGProps } from "react";
const SvgViewHeadline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4 15h16v-2H4zm0 4h16v-2H4zm0-8h16V9H4zm0-6v2h16V5z" />
  </svg>
);
export default SvgViewHeadline;

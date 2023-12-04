import * as React from "react";
import type { SVGProps } from "react";
const SvgDynamicFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M8 8H6v7c0 1.1.9 2 2 2h9v-2H8z" />
    <path d="M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8h-8V7h8zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4z" />
  </svg>
);
export default SvgDynamicFeed;
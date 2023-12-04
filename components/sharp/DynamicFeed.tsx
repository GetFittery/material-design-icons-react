import * as React from "react";
import type { SVGProps } from "react";
const SvgDynamicFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M8 8H6v9h11v-2H8z" />
    <path d="M22 3H10v10h12zm-2 8h-8V7h8zM4 12H2v9h11v-2H4z" />
  </svg>
);
export default SvgDynamicFeed;

import * as React from "react";
import type { SVGProps } from "react";
const SvgViewSidebar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M16 20H2V4h14zm2-12h4V4h-4zm0 12h4v-4h-4zm0-6h4v-4h-4z" />
  </svg>
);
export default SvgViewSidebar;

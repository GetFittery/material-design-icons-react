import * as React from "react";
import type { SVGProps } from "react";
const SvgLiving = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15.5 12v2.5h-7V12h-2v4.5h11V12z" />
    <path d="M10 10v3h4v-3l2.25-.01V7.5h-8.5v2.49z" />
    <path d="M22 2H2v20h20zm-3 7.99V18H5v-8l1.25-.01V6h11.5v3.99z" />
  </svg>
);
export default SvgLiving;

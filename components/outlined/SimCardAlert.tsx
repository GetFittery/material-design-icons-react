import * as React from "react";
import type { SVGProps } from "react";
const SvgSimCardAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z" />
    <path d="M11 15h2v2h-2zm0-7h2v5h-2z" />
  </svg>
);
export default SvgSimCardAlert;

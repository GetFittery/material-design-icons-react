import * as React from "react";
import type { SVGProps } from "react";
const SvgBed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 10V5H3v5H2v9h2v-2h16v2h2v-9zm-8-3h6v3h-6zm-8 3V7h6v3zm-1 5v-3h16v3z" />
  </svg>
);
export default SvgBed;

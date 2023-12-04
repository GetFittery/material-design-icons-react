import * as React from "react";
import type { SVGProps } from "react";
const SvgKingBed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4 12h16v3H4z" opacity={0.3} />
    <path d="M20 10V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5c0-1.1-.9-2-2-2m-7-3h5v3h-5zM6 7h5v3H6zm14 8H4v-3h16z" />
  </svg>
);
export default SvgKingBed;
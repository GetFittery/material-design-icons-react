import * as React from "react";
import type { SVGProps } from "react";
const SvgMuseum = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9zm-4 9H6V9h12z" />
    <path d="m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z" />
  </svg>
);
export default SvgMuseum;
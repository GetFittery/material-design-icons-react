import * as React from "react";
import type { SVGProps } from "react";
const SvgMuseum = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9zm-6 7h-2v-4l-2 3-2-3v4H8v-7h2l2 3 2-3h2z" />
  </svg>
);
export default SvgMuseum;

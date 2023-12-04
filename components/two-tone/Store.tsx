import * as React from "react";
import type { SVGProps } from "react";
const SvgStore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m5.64 9-.6 3h13.92l-.6-3z" opacity={0.3} />
    <path d="M4 4h16v2H4zm16 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2zm-8 11H6v-4h6zm-6.96-6 .6-3h12.72l.6 3z" />
  </svg>
);
export default SvgStore;

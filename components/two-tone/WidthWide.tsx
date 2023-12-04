import * as React from "react";
import type { SVGProps } from "react";
const SvgWidthWide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M8 6h8v12H8z" opacity={0.3} />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M6 18H4V6h2zm10 0H8V6h8zm4 0h-2V6h2z" />
  </svg>
);
export default SvgWidthWide;
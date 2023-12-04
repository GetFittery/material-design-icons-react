import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptLong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11z" opacity={0.3} />
    <path d="M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11z" />
    <path d="M9 7h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2z" />
  </svg>
);
export default SvgReceiptLong;

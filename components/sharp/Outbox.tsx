import * as React from "react";
import type { SVGProps } from "react";
const SvgOutbox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M11 14h2v-3h3l-4-4-4 4h3z" />
    <path d="M3 3v18h18V3zm16 11h-4.18c-.41 1.16-1.51 2-2.82 2s-2.4-.84-2.82-2H5V5h14z" />
  </svg>
);
export default SvgOutbox;

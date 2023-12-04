import * as React from "react";
import type { SVGProps } from "react";
const SvgDoorSliding = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M13 19h5V5h-5zm1-8h2v2h-2zm-8 8h5V5H6zm2-8h2v2H8z" opacity={0.3} />
    <path d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3v2h18v-2zm-9 0H6V5h5zm7 0h-5V5h5z" />
    <path d="M8 11h2v2H8zm6 0h2v2h-2z" />
  </svg>
);
export default SvgDoorSliding;
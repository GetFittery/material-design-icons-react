import * as React from "react";
import type { SVGProps } from "react";
const SvgAdUnits = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M7 3h10v1H7zm0 17h10v1H7z" opacity={0.3} />
    <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7 4V3h10v1zm0 14V6h10v12zm0 3v-1h10v1z" />
    <path d="M16 7H8v2h8z" />
  </svg>
);
export default SvgAdUnits;

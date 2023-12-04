import * as React from "react";
import type { SVGProps } from "react";
const SvgAod = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-9 6h8v1.5H8zm1 3h6v1.5H9z" />
    <path d="M7 21h10v-1H7zM7 3v1h10V3z" opacity={0.3} />
  </svg>
);
export default SvgAod;

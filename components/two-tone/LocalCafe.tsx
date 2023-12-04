import * as React from "react";
import type { SVGProps } from "react";
const SvgLocalCafe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M8 15h6c1.1 0 2-.9 2-2V5H6v8c0 1.1.9 2 2 2" opacity={0.3} />
    <path d="M2 19h18v2H2zm2-6c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2H4zm14-8h2v3h-2zM6 5h10v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2z" />
  </svg>
);
export default SvgLocalCafe;

import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 17h-3v-2h1V9H4v6h6v2H2V7h20zm-7.5 2 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62z" />
  </svg>
);
export default SvgSmartButton;
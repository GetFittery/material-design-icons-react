import * as React from "react";
import type { SVGProps } from "react";
const SvgOutlet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8 12V7h2v5zm6 6h-4v-1.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 16zm2-6h-2V7h2z" />
  </svg>
);
export default SvgOutlet;

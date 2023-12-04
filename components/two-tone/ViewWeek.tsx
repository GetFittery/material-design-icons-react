import * as React from "react";
import type { SVGProps } from "react";
const SvgViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M8 18H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4z" opacity={0.3} />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8 18H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4z" />
  </svg>
);
export default SvgViewWeek;
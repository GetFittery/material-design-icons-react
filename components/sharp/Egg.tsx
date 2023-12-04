import * as React from "react";
import type { SVGProps } from "react";
const SvgEgg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11m1 15c-3 0-5-1.99-5-5v-1h2v1c0 2.92 2.42 3 3 3h1v2z" />
  </svg>
);
export default SvgEgg;

import * as React from "react";
import type { SVGProps } from "react";
const SvgViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M2 21h19v-3H2zM21 8H2v8h19zM2 3v3h19V3z" />
  </svg>
);
export default SvgViewDay;
import * as React from "react";
import type { SVGProps } from "react";
const SvgViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M2 21h19v-3H2zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1M2 3v3h19V3z" />
  </svg>
);
export default SvgViewDay;

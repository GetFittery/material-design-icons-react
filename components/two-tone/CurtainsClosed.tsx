import * as React from "react";
import type { SVGProps } from "react";
const SvgCurtainsClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M6 5h3v14H6zm9 0h3v14h-3z" opacity={0.3} />
    <path d="M20 19V3H4v16H2v2h20v-2zM9 19H6V5h3zm4 0h-2V5h2zm5 0h-3V5h3z" />
  </svg>
);
export default SvgCurtainsClosed;

import * as React from "react";
import type { SVGProps } from "react";
const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M8 5h8v10H8z" opacity={0.3} />
    <path d="M8 21h8v2H8zm8-19.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M16 15H8V5h8z" />
  </svg>
);
export default SvgDock;

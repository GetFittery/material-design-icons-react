import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15 21h2v-2h-2zm4 0h2v-2h-2zM7 21h2v-2H7zm4 0h2v-2h-2zm8-4h2v-2h-2zm0-4h2v-2h-2zM3 3v18h2V5h16V3zm16 6h2V7h-2z" />
  </svg>
);
export default SvgBorderStyle;

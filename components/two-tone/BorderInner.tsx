import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderInner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 15h2v2H3zM3 3h2v2H3zm0 16h2v2H3zm8 2h2v-8h8v-2h-8V3h-2v8H3v2h8zm-4-2h2v2H7zm12-4h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2zM3 7h2v2H3zm16 0h2v2h-2zM7 3h2v2H7zm8 0h2v2h-2zm4 0h2v2h-2z" />
  </svg>
);
export default SvgBorderInner;

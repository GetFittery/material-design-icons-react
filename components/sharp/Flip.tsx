import * as React from "react";
import type { SVGProps } from "react";
const SvgFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15 21h2v-2h-2zm4-12h2V7h-2zM3 3v18h6v-2H5V5h4V3zm16 0v2h2V3zm-8 20h2V1h-2zm8-6h2v-2h-2zM15 5h2V3h-2zm4 8h2v-2h-2zm0 8h2v-2h-2z" />
  </svg>
);
export default SvgFlip;
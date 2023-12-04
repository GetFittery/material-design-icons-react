import * as React from "react";
import type { SVGProps } from "react";
const SvgPresentToAll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16.02H3V4.98h18zM10 12H8l4-4 4 4h-2v4h-4z" />
  </svg>
);
export default SvgPresentToAll;

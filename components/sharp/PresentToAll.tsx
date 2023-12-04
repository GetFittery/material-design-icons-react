import * as React from "react";
import type { SVGProps } from "react";
const SvgPresentToAll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M23 3H1v18h22zm-2 16.02H3V4.98h18zM10 12H8l4-4 4 4h-2v4h-4z" />
  </svg>
);
export default SvgPresentToAll;

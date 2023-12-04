import * as React from "react";
import type { SVGProps } from "react";
const SvgPausePresentation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 19.1H3V5h18zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2" />
    <path d="M9 8h2v8H9zm4 0h2v8h-2z" />
  </svg>
);
export default SvgPausePresentation;
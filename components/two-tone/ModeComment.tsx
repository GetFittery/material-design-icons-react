import * as React from "react";
import type { SVGProps } from "react";
const SvgModeComment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m0 15.17L18.83 16H4V4h16z" />
    <path d="M4 4v12h14.83L20 17.17V4z" opacity={0.3} />
  </svg>
);
export default SvgModeComment;

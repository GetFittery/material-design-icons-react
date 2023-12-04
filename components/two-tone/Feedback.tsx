import * as React from "react";
import type { SVGProps } from "react";
const SvgFeedback = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4 17.17 5.17 16H20V4H4zM11 6h2v4h-2zm0 6h2v2h-2z" opacity={0.3} />
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zm-9-4h2v2h-2zm0-6h2v4h-2z" />
  </svg>
);
export default SvgFeedback;

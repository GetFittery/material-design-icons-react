import * as React from "react";
import type { SVGProps } from "react";
const SvgFeedback = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 2H2.01L2 22l4-4h16zm-9 12h-2v-2h2zm0-4h-2V6h2z" />
  </svg>
);
export default SvgFeedback;

import * as React from "react";
import type { SVGProps } from "react";
const SvgCallToAction = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M23 3H1v18h22zm-2 16H3v-3h18z" />
  </svg>
);
export default SvgCallToAction;

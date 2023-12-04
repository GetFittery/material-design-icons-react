import * as React from "react";
import type { SVGProps } from "react";
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 8V4l8 8-8 8v-4H4V8z" />
  </svg>
);
export default SvgForward;

import * as React from "react";
import type { SVGProps } from "react";
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M14 8.83 17.17 12 14 15.17V14H6v-4h8zM12 4v4H4v8h8v4l8-8z" />
  </svg>
);
export default SvgForward;

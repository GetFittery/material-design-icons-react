import * as React from "react";
import type { SVGProps } from "react";
const SvgViewComfy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M2 4v7h20V4zm8 16h12v-7H10zm-8 0h6v-7H2z" />
  </svg>
);
export default SvgViewComfy;

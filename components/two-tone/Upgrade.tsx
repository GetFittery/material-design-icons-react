import * as React from "react";
import type { SVGProps } from "react";
const SvgUpgrade = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M16 18v2H8v-2zM11 7.99V16h2V7.99h3L12 4 8 7.99z" />
  </svg>
);
export default SvgUpgrade;
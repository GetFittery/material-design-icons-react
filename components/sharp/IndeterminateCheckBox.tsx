import * as React from "react";
import type { SVGProps } from "react";
const SvgIndeterminateCheckBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 3H3v18h18zm-4 10H7v-2h10z" />
  </svg>
);
export default SvgIndeterminateCheckBox;

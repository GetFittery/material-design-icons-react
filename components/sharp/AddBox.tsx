import * as React from "react";
import type { SVGProps } from "react";
const SvgAddBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 3H3v18h18zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4z" />
  </svg>
);
export default SvgAddBox;

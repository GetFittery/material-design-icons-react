import * as React from "react";
import type { SVGProps } from "react";
const SvgEqualizer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M10 20h4V4h-4zm-6 0h4v-8H4zM16 9v11h4V9z" />
  </svg>
);
export default SvgEqualizer;

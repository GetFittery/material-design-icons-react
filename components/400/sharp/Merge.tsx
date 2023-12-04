import * as React from "react";
import type { SVGProps } from "react";
const SvgMerge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m256-120-42-42 236-236v-328l-90 90-42-42 162-162 162 162-42 42-90-90v328l236 236-42 42-224-224z" />
  </svg>
);
export default SvgMerge;

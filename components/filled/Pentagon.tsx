import * as React from "react";
import type { SVGProps } from "react";
const SvgPentagon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m2 9 4 12h12l4-12-10-7z" />
  </svg>
);
export default SvgPentagon;

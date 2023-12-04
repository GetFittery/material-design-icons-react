import * as React from "react";
import type { SVGProps } from "react";
const SvgPentagon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44z" opacity={0.3} />
    <path d="M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44zM2 9l4 12h12l4-12-10-7z" />
  </svg>
);
export default SvgPentagon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm16-6H1v18h22zm-2 16.01H3V4.99h18z" />
  </svg>
);
export default SvgAspectRatio;

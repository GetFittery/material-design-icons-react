import * as React from "react";
import type { SVGProps } from "react";
const SvgVignette = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M23 3H1v18h22zM12 18c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6" />
  </svg>
);
export default SvgVignette;
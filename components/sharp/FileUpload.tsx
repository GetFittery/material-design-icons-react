import * as React from "react";
import type { SVGProps } from "react";
const SvgFileUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M5 10h4v6h6v-6h4l-7-7zm0 8v2h14v-2z" />
  </svg>
);
export default SvgFileUpload;

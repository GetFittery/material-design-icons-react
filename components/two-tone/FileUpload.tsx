import * as React from "react";
import type { SVGProps } from "react";
const SvgFileUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9.83 8H11v6h2V8h1.17L12 5.83z" opacity={0.3} />
    <path d="M5 18h14v2H5zm0-8h4v6h6v-6h4l-7-7zm8-2v6h-2V8H9.83L12 5.83 14.17 8z" />
  </svg>
);
export default SvgFileUpload;

import * as React from "react";
import type { SVGProps } from "react";
const SvgOpenInBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m-7 6-4 4h3v6h2v-6h3z" />
  </svg>
);
export default SvgOpenInBrowser;
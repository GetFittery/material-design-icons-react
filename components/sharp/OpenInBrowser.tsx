import * as React from "react";
import type { SVGProps } from "react";
const SvgOpenInBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 4v16h6v-2H5V8h14v10h-4v2h6V4zm9 6-4 4h3v6h2v-6h3z" />
  </svg>
);
export default SvgOpenInBrowser;

import * as React from "react";
import type { SVGProps } from "react";
const SvgFormatSize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z" />
  </svg>
);
export default SvgFormatSize;

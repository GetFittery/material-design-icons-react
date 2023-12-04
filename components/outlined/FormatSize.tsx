import * as React from "react";
import type { SVGProps } from "react";
const SvgFormatSize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 4v3h5v12h3V7h5V4zm-6 8h3v7h3v-7h3V9H3z" />
  </svg>
);
export default SvgFormatSize;

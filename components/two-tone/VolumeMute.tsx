import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeMute = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 13h2.83L14 15.17V8.83L11.83 11H9z" opacity={0.3} />
    <path d="M7 9v6h4l5 5V4l-5 5zm7-.17v6.34L11.83 13H9v-2h2.83z" />
  </svg>
);
export default SvgVolumeMute;

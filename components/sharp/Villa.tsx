import * as React from "react";
import type { SVGProps } from "react";
const SvgVilla = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M7 21H3V8l13-5v7H7zm12-11c-1.1 0-2 .9-2 2H9v9h5v-5h2v5h5v-9c0-1.1-.9-2-2-2" />
  </svg>
);
export default SvgVilla;

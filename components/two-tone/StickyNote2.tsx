import * as React from "react";
import type { SVGProps } from "react";
const SvgStickyNote2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M5 5v14h9v-5h5V5zm7 9H7v-2h5zm5-4H7V8h10z" opacity={0.3} />
    <path d="M19 5v9h-5v5H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2m-7 11H7v-2h5zm5-4H7V8h10z" />
  </svg>
);
export default SvgStickyNote2;

import * as React from "react";
import type { SVGProps } from "react";
const SvgDockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-40v-60h320v60zM220-160v-760h520v760zm60-180h400v-400H280z" />
  </svg>
);
export default SvgDockFill;

import * as React from "react";
import type { SVGProps } from "react";
const SvgWidthFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v640zm60-60h70v-520h-70zm130 0h420v-520H270zm480 0h70v-520h-70zM270-740v520z" />
  </svg>
);
export default SvgWidthFull;

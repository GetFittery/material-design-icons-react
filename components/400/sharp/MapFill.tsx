import * as React from "react";
import type { SVGProps } from "react";
const SvgMapFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m612-120-263-93-229 91v-638l229-80 263 92 228-91v638zm-34-75v-505l-196-66v505z" />
  </svg>
);
export default SvgMapFill;

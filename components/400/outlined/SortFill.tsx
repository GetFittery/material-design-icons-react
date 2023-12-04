import * as React from "react";
import type { SVGProps } from "react";
const SvgSortFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-240v-60h240v60zm0-210v-60h480v60zm0-210v-60h720v60z" />
  </svg>
);
export default SvgSortFill;

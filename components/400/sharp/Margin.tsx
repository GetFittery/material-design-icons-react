import * as React from "react";
import type { SVGProps } from "react";
const SvgMargin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600zm95-427v-78h78v78zm166-1 1-79 79 1-1 79zm167 1v-78h78v78zM275-441v-78h78v78zm166-1 1-79 79 1-1 79zm167 1v-78h78v78z" />
  </svg>
);
export default SvgMargin;

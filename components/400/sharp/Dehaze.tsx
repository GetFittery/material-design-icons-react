import * as React from "react";
import type { SVGProps } from "react";
const SvgDehaze = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-700v-60h720v60zm0 500v-60h720v60zm0-250v-60h720v60z" />
  </svg>
);
export default SvgDehaze;

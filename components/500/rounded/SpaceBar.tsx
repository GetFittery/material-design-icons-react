import * as React from "react";
import type { SVGProps } from "react";
const SvgSpaceBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M222.152-354.022q-28.349 0-48.24-19.89-19.89-19.891-19.89-48.24v-143.783q0-14.424 9.871-24.244Q173.764-600 188.262-600q14.499 0 24.195 9.821 9.695 9.82 9.695 24.244v143.783h515.696v-143.783q0-14.424 9.871-24.244Q757.59-600 772.068-600q14.477 0 24.313 9.821 9.837 9.82 9.837 24.244v143.783q0 28.349-19.962 48.24-19.961 19.89-48.408 19.89z" />
  </svg>
);
export default SvgSpaceBar;
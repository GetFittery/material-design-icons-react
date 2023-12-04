import * as React from "react";
import type { SVGProps } from "react";
const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M182.152-114.022q-28.349 0-48.24-19.89-19.89-19.891-19.89-48.24v-595.696q0-28.447 19.89-48.408 19.891-19.962 48.24-19.962h595.696q28.447 0 48.408 19.962 19.962 19.961 19.962 48.408v595.696q0 28.349-19.962 48.24-19.961 19.89-48.408 19.89zM510-450v267.848h267.848V-450zm0-60h267.848v-267.848H510zm-60 0v-267.848H182.152V-510zm0 60H182.152v267.848H450z" />
  </svg>
);
export default SvgWindow;

import * as React from "react";
import type { SVGProps } from "react";
const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M182.152-114.022q-28.349 0-48.24-19.89-19.89-19.891-19.89-48.24v-595.696q0-28.447 19.89-48.408 19.891-19.962 48.24-19.962h595.696q28.447 0 48.408 19.962 19.962 19.961 19.962 48.408v595.696q0 28.349-19.962 48.24-19.961 19.89-48.408 19.89zm0-68.13h595.696v-595.696H182.152zm0 0v-595.696z" />
  </svg>
);
export default SvgSquare;

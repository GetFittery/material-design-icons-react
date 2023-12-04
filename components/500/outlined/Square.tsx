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
    <path d="M114.022-114.022v-732.196h732.196v732.196zm68.13-68.13h595.696v-595.696H182.152zm0 0v-595.696z" />
  </svg>
);
export default SvgSquare;

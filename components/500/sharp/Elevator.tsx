import * as React from "react";
import type { SVGProps } from "react";
const SvgElevator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M282.63-230h120v-170h40v-190h-200v190h40zm60-394q23.24 0 39.62-16.5t16.38-39.5q0-23-16.38-39.5T342.63-736q-23 0-39.5 16.5t-16.5 39.5q0 23 16.5 39.5t39.5 16.5m170.935 94h200l-100-160zm100 260 100-160h-200zM114.022-114.022v-732.196h732.196v732.196zm68.13-68.13h595.696v-595.696H182.152zm0 0v-595.696z" />
  </svg>
);
export default SvgElevator;

import * as React from "react";
import type { SVGProps } from "react";
const Svg2D = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M264.435-360h170v-50h-120v-53h87q14.025 0 23.512-9.487 9.488-9.488 9.488-23.513v-70q0-14.45-9.488-24.225Q415.46-600 401.435-600h-137v50h120v54h-87q-14.025 0-23.513 9.487-9.487 9.488-9.487 23.513zm253.413 0h158.018q14.069 0 23.569-9.487 9.5-9.488 9.5-23.513v-173q0-14.45-9.488-24.225Q689.96-600 675.866-600H517.848zm50-50v-140h91.087v140zM182.152-114.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-595.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v595.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm0-68.13h595.696v-595.696H182.152zm0-595.696v595.696z" />
  </svg>
);
export default Svg2D;
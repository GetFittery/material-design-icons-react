import * as React from "react";
import type { SVGProps } from "react";
const SvgEmptyDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M222.152-222.152H460V-400H222.152zm0-217.848H460v-297.848H222.152zM500-222.152h237.609V-520H500zM500-560h237.609v-177.848H500zM182.152-114.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-595.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.457q27.697 0 48.033 20.337 20.336 20.336 20.336 48.033V-720h62.631v62.63h-62.631v145.935h62.631v62.87h-62.631v145.935h62.631V-240h-62.631v57.848q0 27.599-20.336 47.865-20.336 20.265-48.033 20.265zm0-68.13h595.457v-595.696H182.152zm0-595.696v595.696z" />
  </svg>
);
export default SvgEmptyDashboard;

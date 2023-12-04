import * as React from "react";
import type { SVGProps } from "react";
const SvgSensorWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M224.065-75.935q-27.599 0-47.864-20.266-20.266-20.265-20.266-47.864v-671.87q0-27.599 20.266-47.864 20.265-20.266 47.864-20.266h511.87q27.599 0 47.864 20.266 20.266 20.265 20.266 47.864v671.87q0 27.599-20.266 47.864-20.265 20.266-47.864 20.266zm0-438.13h181.87v-40h148.13v40h181.87v-301.87h-511.87zm0 68.13v301.87h511.87v-301.87zm0 301.87h511.87z" />
  </svg>
);
export default SvgSensorWindow;

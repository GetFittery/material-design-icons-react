import * as React from "react";
import type { SVGProps } from "react";
const SvgPanZoom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M114.022-114.022v-241h68.13v124.131l143.935-143.935 48.739 48.739-143.935 143.935h124.131v68.13zm520.891-472.152-48.739-48.739 142.935-142.935H604.978v-68.37h241.24v241.24h-68.37v-124.131z" />
  </svg>
);
export default SvgPanZoom;

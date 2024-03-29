import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M510-510h309q-11-122-98.5-211.5T510-819zm-60 369v-678q-131 11-220.5 109T140-480q0 132 89.5 230T450-141m60 0q123-8 210.5-97.5T819-450H510zm-30 61q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80" />
  </svg>
);
export default SvgPieChart;

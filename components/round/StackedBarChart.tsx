import * as React from "react";
import type { SVGProps } from "react";
const SvgStackedBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M6 20c1.1 0 2-.9 2-2V9H4v9c0 1.1.9 2 2 2M4 8h4V6c0-1.1-.9-2-2-2s-2 .9-2 2zm6 3h4V9c0-1.1-.9-2-2-2s-2 .9-2 2zm6 1v2h4v-2c0-1.1-.9-2-2-2s-2 .9-2 2m2 8c1.1 0 2-.9 2-2v-3h-4v3c0 1.1.9 2 2 2m-6 0c1.1 0 2-.9 2-2v-6h-4v6c0 1.1.9 2 2 2" />
  </svg>
);
export default SvgStackedBarChart;

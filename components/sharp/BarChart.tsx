import * as React from "react";
import type { SVGProps } from "react";
const SvgBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z" />
  </svg>
);
export default SvgBarChart;

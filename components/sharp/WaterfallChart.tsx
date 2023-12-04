import * as React from "react";
import type { SVGProps } from "react";
const SvgWaterfallChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 4h3v16h-3zM3 13h3v7H3zm11-9h3v3h-3zm-4 1h3v4h-3zm-3 5h3v4H7z" />
  </svg>
);
export default SvgWaterfallChart;

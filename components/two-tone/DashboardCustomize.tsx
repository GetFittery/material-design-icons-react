import * as React from "react";
import type { SVGProps } from "react";
const SvgDashboardCustomize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M5 15h4v4H5zM5 5h4v4H5zm10 0h4v4h-4z" opacity={0.3} />
    <path d="M3 11h8V3H3zm2-6h4v4H5zm8-2v8h8V3zm6 6h-4V5h4zM3 21h8v-8H3zm2-6h4v4H5zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
  </svg>
);
export default SvgDashboardCustomize;
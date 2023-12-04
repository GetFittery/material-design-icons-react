import * as React from "react";
import type { SVGProps } from "react";
const SvgLeaderboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M10 5h4v14h-4zm-6 6h4v8H4zm16 8h-4v-6h4z" opacity={0.3} />
    <path d="M16 11V3H8v6H2v12h20V11zm-6-6h4v14h-4zm-6 6h4v8H4zm16 8h-4v-6h4z" />
  </svg>
);
export default SvgLeaderboard;

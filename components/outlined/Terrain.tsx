import * as React from "react";
import type { SVGProps } from "react";
const SvgTerrain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m14 6-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22zM5 16l1.52-2.03L8.04 16z" />
  </svg>
);
export default SvgTerrain;
import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="m7.72 17.7 3.47-1.53.81-.36.81.36 3.47 1.53L12 7.27z"
      opacity={0.3}
    />
    <path d="m4.5 20.29.71.71L12 18l6.79 3 .71-.71L12 2zm8.31-4.12-.81-.36-.81.36-3.47 1.53L12 7.27l4.28 10.43z" />
  </svg>
);
export default SvgNavigation;

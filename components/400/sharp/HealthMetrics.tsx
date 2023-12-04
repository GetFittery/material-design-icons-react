import * as React from "react";
import type { SVGProps } from "react";
const SvgHealthMetrics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-80v-200H80v-400h200v-200h400v200h200v400H680v200zM140-510h236l56 83 69-218h26l91 135h202v-110H620v-200H340v200H140zm200 370h280v-200h200v-110H586l-56-83-70 217h-25l-91-134H140v110h200zm140-340" />
  </svg>
);
export default SvgHealthMetrics;

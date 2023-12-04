import * as React from "react";
import type { SVGProps } from "react";
const SvgFloorLamp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M451-200v-320H187l111-360h366l111 360H511v320zM268-580h426l-74-240H342zm63 500v-60h300v60zm150-620" />
  </svg>
);
export default SvgFloorLamp;

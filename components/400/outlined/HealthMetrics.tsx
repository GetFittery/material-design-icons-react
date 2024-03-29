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
    <path d="M280-80v-200H80v-400h200v-200h400v200h200v400H680v200zM140-510h220q7.576 0 14.394 3.611Q381.212-502.778 385-497l46 70 60-182q3.083-9 11.177-15t18.115-6Q528-630 534-626t11 10l71 106h204v-110H620v-200H340v200H140zm200 370h280v-200h200v-110H600q-8 0-14-4t-11-10l-46-69-61 182q-2.974 9-11.154 15-8.179 6-17.846 6-8 0-14-4t-10-10l-71-106H140v110h200zm140-340" />
  </svg>
);
export default SvgHealthMetrics;

import * as React from "react";
import type { SVGProps } from "react";
const SvgExperiment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M172-120q-42 0-59.5-39t11.5-71l248-280v-270h-82v-60h380v60h-82v270l248 280q29 32 11.5 71T788-120zm70-90h476L558-395H402zm-82 30h640L528-488v-292h-96v292zm320-300" />
  </svg>
);
export default SvgExperiment;

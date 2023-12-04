import * as React from "react";
import type { SVGProps } from "react";
const SvgCampaign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M730-450v-60h150v60zm50 290-121-90 36-48 121 90zm-82-503-36-48 118-89 36 48zM210-200v-160H80v-240h240l200-120v480L320-360h-50v160zm250-146v-268l-124 74H140v120h196zm100 0v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346M300-480" />
  </svg>
);
export default SvgCampaign;

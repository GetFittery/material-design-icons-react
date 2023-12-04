import * as React from "react";
import type { SVGProps } from "react";
const SvgFullStackedBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M190-160q-12.75 0-21.375-8.625T160-190v-80h140v80q0 13-8.625 21.5T270-160zm-30-170v-140h140v140zm0-200v-240q0-13 8.625-21.5T190-800h80q12.75 0 21.375 8.625T300-770v240zm280 370q-12.75 0-21.375-8.625T410-190v-240h140v240q0 13-8.625 21.5T520-160zm-30-330v-140h140v140zm0-200v-80q0-13 8.625-21.5T440-800h80q12.75 0 21.375 8.625T550-770v80zm280 530q-12.75 0-21.375-8.625T660-190v-30h140v30.175q0 12.825-8.625 21.325T770-160zm-30-130v-140h140v140zm0-200v-280q0-13 8.625-21.5T690-800h80q12.75 0 21.375 8.625T800-770v280z" />
  </svg>
);
export default SvgFullStackedBarChart;

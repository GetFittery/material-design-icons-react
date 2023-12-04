import * as React from "react";
import type { SVGProps } from "react";
const SvgChartData = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m296-334 122-122 80 80 152-151v77h60v-180H530v60h77L498-461l-80-80-164 165zM120-120v-720h720v720zm60-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default SvgChartData;

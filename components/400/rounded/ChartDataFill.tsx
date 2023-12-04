import * as React from "react";
import type { SVGProps } from "react";
const SvgChartDataFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m418-455 59 59q8 8 20.5 8t21.5-8l131-131v48q0 12 8.5 20.5T680-450q12 0 21-8.5t9-21.5v-120q0-12-9-21t-21-9H559q-12 0-20.5 9t-8.5 21q0 13 8.5 21.5T560-570h47L498-460l-59-59q-9-9-21.5-9t-20.5 9L275-397q-9 9-9 21.5t9 20.5q9 9 21.5 9t20.5-9zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" />
  </svg>
);
export default SvgChartDataFill;

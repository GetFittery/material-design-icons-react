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
    <path d="m418-455 59 59q8.067 8 20.533 8Q510-388 519-396l131-131v48q0 12 8.625 20.5T680-450q12 0 21-8.625T710-480v-120q0-12-9-21t-21-9H559q-12 0-20.5 9t-8.5 21.5q0 12.5 8.625 21T560-570h47L498-460l-59-59q-9-9-21.467-9-12.466 0-20.533 9L275-397q-9 9-9 21.526 0 12.527 9.391 20.632Q284-346 296.467-346q12.466 0 20.533-9zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default SvgChartData;

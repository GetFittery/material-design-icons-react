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
    <path d="M160-160v-110h140v110zm0-170v-140h140v140zm0-200v-270h140v270zm250 370v-270h140v270zm0-330v-140h140v140zm0-200v-110h140v110zm250 530v-60h140v60zm0-130v-140h140v140zm0-200v-310h140v310z" />
  </svg>
);
export default SvgFullStackedBarChart;

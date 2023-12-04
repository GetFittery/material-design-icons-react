import * as React from "react";
import type { SVGProps } from "react";
const SvgTableChartView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M268-108q-9-9-9-21t9-21l206-206q17-18 42.5-17.5T559-356l97 97 195-194q9-9 21-9t21 8.842q9 8.842 9 21T893-411L698-216q-17.122 17-42.061 17T614-216l-98-98-206 206q-9 9-21 9t-21-9m-128-12q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h600q24 0 42 18t18 42v200q0 12.75-8.625 21.375T770-570H140zm0-510h600v-170H140zm0 0v-170z" />
  </svg>
);
export default SvgTableChartView;

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
    <path d="m289-87-42-42 269-270 140 140 216-215 42 42-258 258-140-140zm-149-33H80v-740h720v290H140zm0-510h600v-170H140zm0 0v-170z" />
  </svg>
);
export default SvgTableChartView;

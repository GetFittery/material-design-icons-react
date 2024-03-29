import * as React from "react";
import type { SVGProps } from "react";
const SvgShowChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m126-220-46-46 300-300 160 161 298-335 42 41-340 384-160-159z" />
  </svg>
);
export default SvgShowChart;

import * as React from "react";
import type { SVGProps } from "react";
const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m529-800 151 120h100q24.75 0 42.375 17.625T840-620v460H120v-460q0-18.617 16.5-26.808Q153-655 168-644l112 84 163-228q15-21.368 40.5-25.184Q509-817 529-800M180-560v194l144 115 160-221 296 231v-379H659L492-754 294-475z" />
  </svg>
);
export default SvgAreaChart;

import * as React from "react";
import type { SVGProps } from "react";
const SvgShapesFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M360-320q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320m-40 180v-122q10 2 20 2h20q141.667 0 240.833-99.167Q700-458.333 700-600v-20q0-10-2-20h122q24.75 0 42.375 17.625T880-580v440q0 24.75-17.625 42.375T820-80H380q-24.75 0-42.375-17.625T320-140" />
  </svg>
);
export default SvgShapesFill;

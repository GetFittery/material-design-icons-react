import * as React from "react";
import type { SVGProps } from "react";
const SvgShapes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-262q10 2 19.5 2H360q5.5 0 10.25-.25T380-261v121h440v-440H699q.5-5 .75-9.75T700-600v-20.5q0-9.5-2-19.5h182v560H320zm40-58q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320m-.212-60Q451-380 515.5-444.288q64.5-64.288 64.5-155.5T515.712-755.5q-64.288-64.5-155.5-64.5T204.5-755.712q-64.5 64.288-64.5 155.5T204.288-444.5q64.288 64.5 155.5 64.5M360-600" />
  </svg>
);
export default SvgShapes;

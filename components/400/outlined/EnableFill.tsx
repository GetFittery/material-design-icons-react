import * as React from "react";
import type { SVGProps } from "react";
const SvgEnableFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-140 86.5-248.5T390-870v64q-111 30-180.5 120.5T140-480q0 142 99 241t241 99q142 0 241-99t99-241q0-115-69.5-205.5T570-806v-64q137 33 223.5 141.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80m0-254L280-534l42-42 128 128v-431h60v431l128-128 42 42z" />
  </svg>
);
export default SvgEnableFill;

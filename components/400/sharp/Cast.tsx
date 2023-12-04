import * as React from "react";
import type { SVGProps } from "react";
const SvgCast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M881-160H601q0-15-1-30t-3-30h224v-520H141v60q-15-2-30-3t-30-1v-116h800zm-800 0v-104q41.667 0 70.833 30.333Q181-203.333 181-160zm200 0q0-84.66-58-144.33Q165-364 81-364v-60q108.643 0 184.321 77.5Q341-269 341-160zm160 0q0-75-28-141.5t-77-116q-49-49.5-114.5-78T81-524v-60q87 0 163.5 33.5t133.5 91q57 57.5 90 135T501-160z" />
  </svg>
);
export default SvgCast;

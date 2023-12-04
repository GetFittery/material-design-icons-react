import * as React from "react";
import type { SVGProps } from "react";
const SvgStreetview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M722.704-520q-84.122 0-143.413-59.291Q520-638.582 520-722.704q0-84.122 59.291-143.459T722.704-925.5q84.122 0 143.459 59.337T925.5-722.704q0 84.122-59.337 143.413Q806.826-520 722.704-520M141.901-141.978q-13.162-9-20.282-23.189-7.119-14.189-7.119-30.418v-567.557q0-34.445 23.339-57.923 23.339-23.479 57.815-23.479h272.868q-14.479 25.24-21.979 55.789-7.5 30.549-7.5 66.125 0 56.491 22.35 109.148 22.35 52.656 61.085 91.004zM479.522-114.5v-221.176q0-44.325 26.845-78.36 26.846-34.036 70.59-42.007 32.565-8.24 69.928-10.859 37.363-2.62 75.745-2.62 35.757 0 65.716 2.12 29.958 2.119 56.198 8.334v263.493q0 34.444-23.514 57.759-23.513 23.316-57.784 23.316z" />
  </svg>
);
export default SvgStreetview;

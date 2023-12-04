import * as React from "react";
import type { SVGProps } from "react";
const SvgRoute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M355-120q-65 0-110-45.531T200-275v-349q-35-13-57.5-41.263-22.5-28.264-22.5-64.404Q120-776 152.5-808t78-32q45.5 0 77.5 32.138 32 32.139 32 78.051Q340-694 317.5-665.5 295-637 260-624v349q0 39.188 27.5 67.094Q315-180 355.5-180t67.5-27.906q27-27.906 27-67.094v-410q0-65 45-110t110-45q65 0 110 45t45 110v349q35 13 57.5 41.365Q840-266.27 840-230q0 45-32.083 77.5Q775.833-120 730-120q-45 0-77.5-32.5T620-230q0-36.297 22.5-65.148Q665-324 700-336v-349q0-40-27.5-67.5T605-780q-40 0-67.5 27.5T510-685v410q0 63.938-45 109.469Q420-120 355-120M230.5-680q20.5 0 35-15t14.5-35.5q0-20.5-14.375-35T230-780q-20 0-35 14.375T180-730q0 20 15 35t35.5 15m500 500q20.5 0 35-15t14.5-35.5q0-20.5-14.375-35T730-280q-20 0-35 14.375T680-230q0 20 15 35t35.5 15m-.5-50" />
  </svg>
);
export default SvgRoute;

import * as React from "react";
import type { SVGProps } from "react";
const SvgLabs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-80q-83 0-141.5-58.5T280-280v-360q-33 0-56.5-23.5T200-720v-80q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v80q0 33-23.5 56.5T680-640v360q0 83-58.5 141.5T480-80M260-700h440v-120H260zm220 560q51 0 88.5-31t48.5-79H510q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T510-310h110v-60H510q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T510-430h110v-60H510q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T510-550h110v-90H340v360q0 58.333 40.833 99.167Q421.667-140 480-140M260-700v-120z" />
  </svg>
);
export default SvgLabs;

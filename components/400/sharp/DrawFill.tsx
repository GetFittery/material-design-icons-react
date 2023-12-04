import * as React from "react";
import type { SVGProps } from "react";
const SvgDrawFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-120v-128l618-618 128 128-618 618zm593-549 68-68-44-44-68 68zm7 409q0-40-29.5-73.5T638-386l-47 47q50 12 79.5 34t29.5 45q0 32-44.5 56T530-180v60q101 0 165.5-36.5T760-260M240-414l48-48q-54-13-81-27.5T180-520q0-17 23.5-32t86.5-38q78-29 109-57.5t31-71.5q0-57-37-89t-103-32q-44 0-87 20.5T133-765l42 39q23-23 56-38.5t59-15.5q39 0 59.5 15.5T370-719q0 22-20.5 36.5T266-645q-82 30-114 57t-32 68q0 37 32 65t88 41" />
  </svg>
);
export default SvgDrawFill;

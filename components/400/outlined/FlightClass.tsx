import * as React from "react";
import type { SVGProps } from "react";
const SvgFlightClass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M550-440q-28.875 0-49.438-20.562Q480-481.125 480-510v-220q0-28.875 20.562-49.438Q521.125-800 550-800h100q28.875 0 49.438 20.562Q720-758.875 720-730v220q0 28.875-20.562 49.438Q678.875-440 650-440zm-10-60h120v-240H540zM372-240q-23 0-42-13.5T305-290L200-643v-157h60v148l104.545 352H720v60zm-52 120v-60h400v60zm220-620h120z" />
  </svg>
);
export default SvgFlightClass;

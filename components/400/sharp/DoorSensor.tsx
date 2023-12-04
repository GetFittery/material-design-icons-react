import * as React from "react";
import type { SVGProps } from "react";
const SvgDoorSensor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M340-360v-420 600zm-60 30h60v150h280v-600H340v390h-60v-450h400v720H280zm200.5-240q12.5 0 21-9t8.5-21.5q0-12.5-8.625-21T480-630q-12 0-21 8.625T450-600q0 12 9 21t21.5 9M780-830h60v220h-60zM510-330H160v-60h350z" />
  </svg>
);
export default SvgDoorSensor;

import * as React from "react";
import type { SVGProps } from "react";
const SvgSensorDoor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-80v-740q0-24 18-42t42-18h520q24 0 42 18t18 42v740zm60-60h520v-680H220zm400.5-290q20.5 0 35-15t14.5-35.5q0-20.5-14.583-35Q640.833-530 620-530q-20 0-35 14.583-15 14.584-15 35.417 0 20 15 35t35.5 15M220-140v-680z" />
  </svg>
);
export default SvgSensorDoor;

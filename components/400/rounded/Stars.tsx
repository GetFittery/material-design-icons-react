import * as React from "react";
import type { SVGProps } from "react";
const SvgStars = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m480-362 122 93q9 7 17.5.5T625-286l-49-151 121-86q9-7 6-17t-14-10H541l-47-156q-3-11-13.5-11T466-706l-48 156H270q-11 0-14 10t6 17l121 86-48 152q-3 11 5.5 17t17.5-1zm0 282q-85 0-158-30.5T195-195q-54-54-84.5-127T80-480q0-84 30.5-157T195-764q54-54 127-85t158-31q84 0 157 31t127 85q54 54 85 127t31 157q0 85-31 158t-85 127q-54 54-127 84.5T480-80m0-60q145 0 242.5-97.5T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 145 97.5 242.5T480-140" />
  </svg>
);
export default SvgStars;

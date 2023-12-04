import * as React from "react";
import type { SVGProps } from "react";
const SvgFrameInspect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M449.844-410Q492-410 521-438.844q29-28.844 29-71T521.156-581q-28.844-29-71-29T379-581.156q-29 28.844-29 71T378.844-439q28.844 29 71 29M643-274 539-378q-22 14-44.5 21t-44.032 7Q384-350 337-397t-47-113q0-66 47-113t113-47q66 0 113 47t47 113.468q0 21.532-7.5 44.032Q595-443 581-421l105 105zM180-120q-24 0-42-18t-18-42v-172h60v172h172v60zm428 0v-60h172v-172h60v172q0 24-18 42t-42 18zM120-608v-172q0-24 18-42t42-18h172v60H180v172zm660 0v-172H608v-60h172q24 0 42 18t18 42v172z" />
  </svg>
);
export default SvgFrameInspect;

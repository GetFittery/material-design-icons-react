import * as React from "react";
import type { SVGProps } from "react";
const SvgCottage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-120v-401l-84 64-36-48 120-91v-114h60v68l260-198 440 336-36 47-84-64v401zm60-60h230v-160h60v160h230v-387L480-765 220-567zm-60-580q0-46 32.5-78t77.5-32q21.25 0 35.625-15T320-920h60q0 45-32.083 77.5Q315.833-810 270-810q-20 0-35 14.375T220-760zm60 580h520z" />
  </svg>
);
export default SvgCottage;

import * as React from "react";
import type { SVGProps } from "react";
const SvgDomainFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-180v-600q0-24.75 17.625-42.375T140-840h270q24.75 0 42.375 17.625T470-780v105h350q24.75 0 42.375 17.625T880-615v435q0 24.75-17.625 42.375T820-120H140q-24.75 0-42.375-17.625T80-180m60 0h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm165 495h105v-105H305zm0-165h105v-105H305zm0-165h105v-105H305zm0-165h105v-105H305zm165 495h350v-435H470v105h80v60h-80v105h80v60h-80zm185-270v-60h60v60zm0 165v-60h60v60z" />
  </svg>
);
export default SvgDomainFill;

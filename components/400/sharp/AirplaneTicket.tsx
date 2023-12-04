import * as React from "react";
import type { SVGProps } from "react";
const SvgAirplaneTicket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-213q37-8 61.5-37.5T166-480q0-40-24.5-70T80-587v-213h800v640zm60-60h680v-520H140v109q39 26 62.5 65t23.5 86q0 47-23.5 86T140-329zm208-105 368-101q17-5 25-16t3-28q-5-17-18-23.5t-29-2.5l-103 27-166-162-52 12 103 181-111 31-52-43-29 10zm132-155" />
  </svg>
);
export default SvgAirplaneTicket;

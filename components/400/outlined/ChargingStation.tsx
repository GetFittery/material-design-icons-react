import * as React from "react";
import type { SVGProps } from "react";
const SvgChargingStation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M460-280v-160h-80l120-240v160h80zM260-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18zm0-90v30h440v-30zm0-60h440v-580H260zm0-640h440v-30H260zm0 0v-30zm0 700v30z" />
  </svg>
);
export default SvgChargingStation;
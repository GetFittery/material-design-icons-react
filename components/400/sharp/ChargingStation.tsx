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
    <path d="M460-280v-160h-80l120-240v160h80zM200-40v-880h560v880zm60-90v30h440v-30zm0-60h440v-580H260zm0-640h440v-30H260zm0 0v-30zm0 700v30z" />
  </svg>
);
export default SvgChargingStation;

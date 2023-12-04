import * as React from "react";
import type { SVGProps } from "react";
const SvgSdk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24.75 0-42.375-17.625T120-180v-535q0-9.8 3.5-18.55T134-750l57-74q6.457-8 14.707-12T224-840h513q10.043 0 18.293 4T770-824l57 74q5 8 9 16.654T840-715v535q0 24.75-17.625 42.375T780-120zm18-615h565l-36.409-45H234zm-18 555h600v-495H180zm410-117 130-130-130-130-40 40 90 90-90 90zm-220 4 40-40-90-90 90-90-40-40-130 130zM180-180v-495z" />
  </svg>
);
export default SvgSdk;

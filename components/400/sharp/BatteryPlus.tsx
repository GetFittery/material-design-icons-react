import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-80v-736h120v-64h160v64h120v363q-16 0-31 2t-29 7v-312H340v616h152q9 17 21 32t26 28zm375 0v-125H535v-60h120v-120h60v120h125v60H715v125z" />
  </svg>
);
export default SvgBatteryPlus;

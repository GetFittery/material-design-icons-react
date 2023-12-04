import * as React from "react";
import type { SVGProps } from "react";
const SvgSchedule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M515.63-493.544v-165.869q0-14.118-9.241-23.374-9.242-9.256-23.339-9.256-14.096 0-23.388 9.256-9.292 9.256-9.292 23.374v178.935q0 6.717 2.239 12.4 2.239 5.684 6.717 11.23l141.13 146.131Q610.477-300 624.901-300.5q14.425-.5 24.382-10.217 9.956-9.718 9.956-23.913 0-14.196-9.956-24.153zM480.033-74.022q-83.468 0-157.514-31.946t-129.32-87.211q-55.274-55.265-87.226-129.299-31.951-74.035-31.951-157.496 0-83.461 31.998-157.534t87.199-129.273q55.2-55.201 129.251-87.319 74.05-32.118 157.53-32.118T637.53-854.1q74.051 32.118 129.251 87.319 55.201 55.2 87.319 129.251 32.118 74.05 32.118 157.53T854.1-322.47q-32.118 74.051-87.319 129.251-55.2 55.201-129.24 87.199-74.04 31.998-157.508 31.998m-.155-68.13q139.165 0 238.568-99.163 99.402-99.163 99.402-238.565 0-139.403-99.371-238.685-99.37-99.283-238.475-99.283-139.285 0-238.567 99.253Q142.152-619.342 142.152-480q0 139.522 99.281 238.685 99.28 99.163 238.445 99.163" />
  </svg>
);
export default SvgSchedule;
import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M450-403h60v-240h-60zm30.5 150q12.5 0 21-9t8.5-21.5q0-12.5-8.625-21T480-313q-12 0-21 8.625T450-283q0 12 9 21t21.5 9M310-80q-12.75 0-21.375-8.625T280-110v-676q0-12.75 8.625-21.375T310-816h90v-64h160v64h90q12.75 0 21.375 8.625T680-786v676q0 12.75-8.625 21.375T650-80zm30-60h280v-616H340zm0 0h280z" />
  </svg>
);
export default SvgBatteryAlert;

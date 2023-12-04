import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryChange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m470-276 43-42-31-31q-6-6-9-13.5t-3-15.5q0-8 3-16t9-14l38-38q14-14 22-32.5t8-38.5q0-20-8-39.5T520-590l-31-31-42 43 30 30q6 6 9.5 14t3.5 16q0 8-3.5 15.5T477-489l-37 38q-14 14-22 33t-8 39q0 20 8 39.5t22 33.5zM310-80q-13 0-21.5-8.5T280-110v-676q0-13 8.5-21.5T310-816h90v-64h160v64h90q13 0 21.5 8.5T680-786v676q0 13-8.5 21.5T650-80zm30-60h280v-616H340zm0 0h280z" />
  </svg>
);
export default SvgBatteryChange;

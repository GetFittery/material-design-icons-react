import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M310-80q-13 0-21.5-8.5T280-110v-676q0-13 8.5-21.5T310-816h90v-34q0-13 8.5-21.5T430-880h100q13 0 21.5 8.5T560-850v34h90q13 0 21.5 8.5T680-786v381q-17 6-31.5 14.5T620-371v-385H340v616h213q5 17 12.5 31.5T584-80zm444-83-63 62q-9 8-21 8.5t-21-8.5q-9-9-9-21t9-21l63-63-63-63q-9-9-9-21t9-21q9-9 21-9t21 9l63 63 63-63q9-9 21-9t21 9q9 9 8.5 21t-8.5 21l-62 63 62 63q8 9 8.5 21t-8.5 21q-9 9-21 8.5t-21-8.5z" />
  </svg>
);
export default SvgBatteryError;

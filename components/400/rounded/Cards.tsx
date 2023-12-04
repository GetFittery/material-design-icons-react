import * as React from "react";
import type { SVGProps } from "react";
const SvgCards = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M431-500H250q-12.75 0-21.375-8.625T220-530v-181q0-12.75 8.625-21.375T250-741h181q12.75 0 21.375 8.625T461-711v181q0 12.75-8.625 21.375T431-500m0 281H250q-12.75 0-21.375-8.625T220-249v-181q0-12.75 8.625-21.375T250-460h181q12.75 0 21.375 8.625T461-430v181q0 12.75-8.625 21.375T431-219m280-281H530q-12.75 0-21.375-8.625T500-530v-181q0-12.75 8.625-21.375T530-741h181q12.75 0 21.375 8.625T741-711v181q0 12.75-8.625 21.375T711-500m0 281H530q-12.75 0-21.375-8.625T500-249v-181q0-12.75 8.625-21.375T530-460h181q12.75 0 21.375 8.625T741-430v181q0 12.75-8.625 21.375T711-219M280-560h121v-121H280zm280 0h121v-121H560zM280-279h121v-121H280zm280 0h121v-121H560zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180z" />
  </svg>
);
export default SvgCards;

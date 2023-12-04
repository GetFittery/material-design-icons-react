import * as React from "react";
import type { SVGProps } from "react";
const SvgStackedInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M210-240q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h660q24 0 42 18t18 42v480q0 24-18 42t-42 18zm0-214v154h660v-154H680q-19 45-55.5 71.5T540-356q-48 0-84.5-26.5T400-454zm330 38q29 0 58-22t34-51q2-11 10-18t19-7h209v-266H210v266h209q11 0 19 7t10 18q5 29 34 51t58 22M90-120q-24 0-42-18t-18-42v-439q0-12.75 8.675-21.375Q47.351-649 60.175-649 73-649 81.5-640.375T90-619v439h619q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T709-120zm120-180h660z" />
  </svg>
);
export default SvgStackedInbox;

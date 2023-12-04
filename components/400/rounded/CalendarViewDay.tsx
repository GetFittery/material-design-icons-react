import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-283q-24.75 0-42.375-17.625T120-343v-274q0-24.75 17.625-42.375T180-677h600q24.75 0 42.375 17.625T840-617v274q0 24.75-17.625 42.375T780-283zm0-60h600v-274H180zm-31-437q-12 0-20.5-9t-8.5-21.5q0-12.5 8.625-21T150-840h661q12 0 20.5 9t8.5 21.5q0 12.5-8.625 21T810-780zm0 660q-12 0-20.5-9t-8.5-21.5q0-12.5 8.625-21T150-180h661q12 0 20.5 9t8.5 21.5q0 12.5-8.625 21T810-120zm31-497v274z" />
  </svg>
);
export default SvgCalendarViewDay;

import * as React from "react";
import type { SVGProps } from "react";
const SvgViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M149-160q-12 0-20.5-9t-8.5-21.5q0-12.5 8.625-21T150-220h661q12 0 20.5 9t8.5 21.5q0 12.5-8.625 21T810-160zm0-580q-12 0-20.5-9t-8.5-21.5q0-12.5 8.625-21T150-800h661q12 0 20.5 9t8.5 21.5q0 12.5-8.625 21T810-740zm31 409q-24.75 0-42.375-17.625T120-391v-178q0-24.75 17.625-42.375T180-629h600q24.75 0 42.375 17.625T840-569v178q0 24.75-17.625 42.375T780-331zm0-60h600v-178H180zm0-178v178z" />
  </svg>
);
export default SvgViewDay;

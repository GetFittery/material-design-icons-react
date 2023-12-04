import * as React from "react";
import type { SVGProps } from "react";
const SvgMapFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m592-127-243-86-188 75q-8 3-15 1.5t-13-5.5q-6-4-9.5-10t-3.5-14v-565q0-13 7.5-23t19.5-15l182-64q5-2 10-2.5t10-.5q5 0 10 .5t10 2.5l243 85 187-75q8-3 15-2t13 5q6 4 9.5 10.5T840-795v572q0 11-7.5 19T814-192l-182 65q-5 2-10 2.5t-10 .5q-5 0-10-.5t-10-2.5m-14-68v-505l-196-66v505z" />
  </svg>
);
export default SvgMapFill;

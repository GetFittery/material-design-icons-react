import * as React from "react";
import type { SVGProps } from "react";
const SvgEarthquakeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M360-80q-10 0-18-5.5T331-101L228-450H80v-60h170q10 0 18 5.5t11 15.5l76 256 136-623q2-11 10-17.5t19-6.5q11 0 19 6t10 17l94 423 68-225q3-10 11-15.5t18-5.5q10 0 17.5 5t10.5 14l54 151h58v60h-80q-10 0-17.5-5.5T772-470l-30-83-74 252q-3 10-11 16t-18 5q-10-1-18-7t-10-16l-91-402-131 602q-2 10-10 16t-19 7" />
  </svg>
);
export default SvgEarthquakeFill;

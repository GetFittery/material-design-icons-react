import * as React from "react";
import type { SVGProps } from "react";
const SvgBloodPressure = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-570v-170q0-24 18-42t42-18h680q24 0 42 18t18 42v260h-60v-260H140v170zm381 410H140q-24 0-42-18t-18-42v-170h60v170h297q4 16 10 31t14 29m218.894 70Q601-90 545.5-145.606t-55.5-134.5Q490-359 545.606-414.5t134.5-55.5Q759-470 814.5-414.394t55.5 134.5Q870-201 814.394-145.5T679.894-90M688-260l91-91-28-28-91 91zM80-450v-60h137l63 123 160-320 106 215q-13 8-25 18.5T498-452l-59-120-160 320-98-198z" />
  </svg>
);
export default SvgBloodPressure;

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
    <path d="M80-570v-170q0-24 18-42t42-18h680q24 0 42 18t18 42v260h-60v-260H140v170zm200 280q-9 0-16-4t-12-12l-71-144H80v-60h120q7.806 0 14.903 4.5T226-493l54 106 133-266q4-8 11.381-11.5t15.5-3.5q8.119 0 15.619 3.5T467-653l80 161q-13 8-25 18.5T499-452l-59-120-134 266q-3.611 8-10.833 12-7.223 4-15.167 4m181 130H140q-24 0-42-18t-18-42v-170h60v170h297q4 16 10 31t14 29m218.894 70Q601-90 545.5-145.606t-55.5-134.5Q490-359 545.606-414.5t134.5-55.5Q759-470 814.5-414.394t55.5 134.5Q870-201 814.394-145.5T679.894-90M688-260l91-91-28-28-91 91z" />
  </svg>
);
export default SvgBloodPressure;

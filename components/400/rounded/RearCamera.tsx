import * as React from "react";
import type { SVGProps } from "react";
const SvgRearCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m251-355 104-104q9-9 9-21t-9-21L251-605q-9-9-21-9t-21 9q-9 9-9 21t9 21l53 53H110q-12.75 0-21.375 8.675Q80-492.649 80-479.825 80-467 88.625-458.5T110-450h152l-53 53q-9 9-9 21t9 21q9 9 21 9t21-9m414.175-295q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5M510-180h310v-600H510zm-370 60q-24 0-42-18t-18-42v-210h60v210h310v-600H140v210H80v-210q0-24 18-42t42-18h680q24 0 42 18t18 42v600q0 24-18 42t-42 18zm310-660v600z" />
  </svg>
);
export default SvgRearCamera;

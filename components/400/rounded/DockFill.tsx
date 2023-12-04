import * as React from "react";
import type { SVGProps } from "react";
const SvgDockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-70q0-13 8.5-21.5T350-100h260q13 0 21.5 8.5T640-70q0 13-8.5 21.5T610-40H350q-13 0-21.5-8.5T320-70m-40-90q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h400q24 0 42 18t18 42v640q0 24-18 42t-42 18zm0-180h400v-400H280z" />
  </svg>
);
export default SvgDockFill;

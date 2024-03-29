import * as React from "react";
import type { SVGProps } from "react";
const SvgTableChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M820-121H180q-24 0-42-18t-18-42v-599q0-24 18-42t42-18h640q24 0 42 18t18 42v599q0 24-18 42t-42 18M180-639h640v-141H180zm150 60H180v398h150zm340 0v398h150v-398zm-60 0H390v398h220z" />
  </svg>
);
export default SvgTableChart;

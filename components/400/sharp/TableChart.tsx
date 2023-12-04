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
    <path d="M120-121v-719h760v719zm60-518h640v-141H180zm150 60H180v398h150zm340 0v398h150v-398zm-60 0H390v398h220z" />
  </svg>
);
export default SvgTableChart;

import * as React from "react";
import type { SVGProps } from "react";
const SvgAtm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M409-360v-192h-80v-48h208v48h-80v192zm-329 0v-240h207v240h-48v-77H128v77zm48-125h111v-67H128zm458 125v-240h294v240h-48v-192h-75v150h-48v-150h-75v192z" />
  </svg>
);
export default SvgAtm;

import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowAndEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-120 334-266l42-43 74 74v-225q0-25-17.5-42.5T390-520H40v-320h60v260h290q27 0 50 11t40 30q17-19 40-30t50-11h290v-260h60v320H570q-25 0-42.5 17.5T510-460v225l74-73 42 42z" />
  </svg>
);
export default SvgArrowAndEdge;

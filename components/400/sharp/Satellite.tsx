import * as React from "react";
import type { SVGProps } from "react";
const SvgSatellite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M234-280h490L577-476 445-305l-93-127zm6-218q93 0 157.5-64.75T462-720h-54q0 70-48.837 119T240-552zm0-131q39 0 67-26.688 28-26.687 28-64.312h-95zM120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600z" />
  </svg>
);
export default SvgSatellite;

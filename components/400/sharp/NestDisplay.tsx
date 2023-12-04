import * as React from "react";
import type { SVGProps } from "react";
const SvgNestDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-200q-99 0-169.5-13.5T240-246v-34h-95q-26.145 0-44.072-19.5Q83-319 85-345l31-360q2-23 18.808-39 16.807-16 40.192-16h610q23.385 0 40.192 16Q842-728 844-705l31 360q2 26-15.928 45.5Q841.145-280 815-280h-95v34q0 19-70.5 32.5T480-200M145-340h670l-30-360H175zm335-180" />
  </svg>
);
export default SvgNestDisplay;

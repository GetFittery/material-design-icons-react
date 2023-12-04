import * as React from "react";
import type { SVGProps } from "react";
const SvgStrategy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M217.13-518.565 74.022-600.558v-163.507l143.108-82.153 143.348 82.073v163.667zm0-76.653 76.892-44.086v-86.174l-76.892-44.087-76.652 44.087v86.174zm439.088 85.109v-77.413l150 88v283.508L562.87-74.022 319.761-216.014v-283.508l150-87v76.413l-83.543 49.174v207.498L562.87-151.435l176.891-102.002v-207.498zm-126.457 90.348v-466.457h357.457L812.065-772.87l75.153 113.109h-291v240zM217.13-682.391" />
  </svg>
);
export default SvgStrategy;

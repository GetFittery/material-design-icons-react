import * as React from "react";
import type { SVGProps } from "react";
const SvgTrip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-120v-600h240v-160h320v160h240v600zm300-600h200v-100H380zm-133 60H140v480h107zm407 480v-480H307v480zm60-480v480h106v-480zM480-425" />
  </svg>
);
export default SvgTrip;

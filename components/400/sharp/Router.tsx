import * as React from "react";
import type { SVGProps } from "react";
const SvgRouter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-324h496v-176h60v176h164v324zm60-60h600v-204H180zm386-487-41-41q24-24 54.431-38 30.432-14 66.569-14t66.569 14Q743-732 767-708l-41 41q-14-14-35-23.5t-44.5-9.5q-23.5 0-45 9.5T566-667m-85-85-44-44q33-33 88-58.5T646-880q66 0 121 25.5t88 58.5l-44 44q-26-29-68.5-48.5T646-820q-54 0-96.5 19.5T481-752M180-180v-204zm60-60h84v-84h-84zm148 0h84v-84h-84zm148 0h84v-84h-84z" />
  </svg>
);
export default SvgRouter;

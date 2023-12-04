import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M142.152-154.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-515.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v515.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zM514-222.152h122.043v-515.696H514zm-188.804 0H447v-515.696H325.196zm-183.044 0h123.044v-515.696H142.152zm553.891 0h121.805v-515.696H696.043z" />
  </svg>
);
export default SvgCalendarViewWeek;

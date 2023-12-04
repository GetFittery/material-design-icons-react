import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M182.152-277.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-269.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v269.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm0-68.13h595.696v-269.696H182.152zm-68.13-438.196v-68.131h732.196v68.131zm0 674.827v-68.37h732.196v68.37zm68.13-506.327v269.696z" />
  </svg>
);
export default SvgCalendarViewDay;

import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarViewMonth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M142.152-154.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-515.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v515.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm0-355.978h184.565v-227.848H142.152zm244.565 0h186.566v-227.848H386.717zm246.566 0h184.565v-227.848H633.283zM326.717-222.152V-450H142.152v227.848zm60 0h186.566V-450H386.717zm246.566 0h184.565V-450H633.283z" />
  </svg>
);
export default SvgCalendarViewMonth;

import * as React from "react";
import type { SVGProps } from "react";
const SvgViewStream = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M777.848-262.152v-183.783H182.152v183.783zm0-251.913v-183.783H182.152v183.783zM182.152-194.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-435.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v435.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265z" />
  </svg>
);
export default SvgViewStream;

import * as React from "react";
import type { SVGProps } from "react";
const SvgOpenInBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M182.152-114.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-595.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v595.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H574.065v-68.13h203.783v-532.826H182.152v532.826h203.783v68.13zm263.783 0v-280.652l-80.37 80.37-48.739-48.739L480-526.218l163.174 163.175-48.739 48.739-80.37-80.37v280.652z" />
  </svg>
);
export default SvgOpenInBrowser;

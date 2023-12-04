import * as React from "react";
import type { SVGProps } from "react";
const SvgChurch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-80v-309l165-73v-131l205-105v-82h-80v-60h80v-80h60v80h80v60h-80v82l205 105v131l165 73v309H530v-160q0-21.25-14.325-35.625Q501.351-290 480.175-290 459-290 444.5-275.625 430-261.25 430-240v160zm60-60h230v-102q0-46 32.118-79 32.117-33 78-33Q526-354 558-321q32 33 32 79v102h230v-214l-165-73v-133l-175-91-175 91v133l-165 73zm340.059-285Q503-425 519-441.059q16-16.059 16-39T518.941-519q-16.059-16-39-16T441-518.941q-16 16.059-16 39T441.059-441q16.059 16 39 16M480-396" />
  </svg>
);
export default SvgChurch;

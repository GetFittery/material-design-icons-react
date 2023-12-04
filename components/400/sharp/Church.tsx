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
    <path d="M80-80v-309l165-73v-131l205-105v-82h-80v-60h80v-80h60v80h80v60h-80v82l205 105v131l165 73v309H530v-210H430v210zm60-60h230v-214h220v214h230v-214l-165-73v-133l-175-91-175 91v133l-165 73zm340.059-285Q503-425 519-441.059q16-16.059 16-39T518.941-519q-16.059-16-39-16T441-518.941q-16 16.059-16 39T441.059-441q16.059 16 39 16M480-396" />
  </svg>
);
export default SvgChurch;

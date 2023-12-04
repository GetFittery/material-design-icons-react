import * as React from "react";
import type { SVGProps } from "react";
const SvgTabs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm60-60h600v-313H180zm0-373h600v-227H180zm381-137h189v-60H561zM180-553v-227z" />
  </svg>
);
export default SvgTabs;

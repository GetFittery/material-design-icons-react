import * as React from "react";
import type { SVGProps } from "react";
const SvgSlideshow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M629-467q7-4.5 7-12.75T629-493L410-634q-8-5-15.5-.5T387-621v282q0 9 7.5 13.5t15.5-.5zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default SvgSlideshow;

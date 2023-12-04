import * as React from "react";
import type { SVGProps } from "react";
const SvgViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-160v-60h720v60zm0-171v-298h720v298zm60-60h600v-178H180zm-60-349v-60h720v60zm60 349v-178z" />
  </svg>
);
export default SvgViewDay;

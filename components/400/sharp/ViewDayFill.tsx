import * as React from "react";
import type { SVGProps } from "react";
const SvgViewDayFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-160v-60h720v60zm0-171v-298h720v298zm0-409v-60h720v60z" />
  </svg>
);
export default SvgViewDayFill;

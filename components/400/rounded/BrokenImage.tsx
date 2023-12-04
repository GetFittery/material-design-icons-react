import * as React from "react";
import type { SVGProps } from "react";
const SvgBrokenImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm43-314 151-151q9-9 21-9t21 9l149 149 150-150q9-9 21-9t21 9l23 23v-217H180v303zm-43 254h600v-298l-44-44-150 150q-9 9-21 9t-21-9L395-521 244-370q-9 9-21 9t-21-9l-22-22zm0 0v-298 60-362z" />
  </svg>
);
export default SvgBrokenImage;

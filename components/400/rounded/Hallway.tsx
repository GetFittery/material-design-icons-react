import * as React from "react";
import type { SVGProps } from "react";
const SvgHallway = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-80q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h141l139-139q9-9 21-9t21 9l140 139h138q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm267-124-81-113q-5-6-12-6t-12 6l-88 114q-6 8-1.5 16t13.5 8h431q8.5 0 12.75-8t-.75-16L591-422q-5-6-12-6t-12 6zm-59-536h186l-93-93zM180-140v-600z" />
  </svg>
);
export default SvgHallway;

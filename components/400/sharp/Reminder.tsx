import * as React from "react";
import type { SVGProps } from "react";
const SvgReminder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M260-620h60v-60q0-25.5-17.25-42.75T260-740q-25.5 0-42.75 17.25T200-680q0 25.5 17.25 42.75T260-620m180 0q25.5 0 42.75-17.25T500-680q0-25.5-17.25-42.75T440-740q-25.5 0-42.75 17.25T380-680v60zM800-80H381L127-403l52-57 141 75v-175h-60q-50 0-85-35t-35-85q0-50 35-85t85-35q16 0 31 4t29 12v-96h60v96q14.237-8 28.983-12T440-800q50 0 85 35t35 85q0 50-35 85t-85 35h-60v275l-144-77 175 222h329v-320H460v-60h340z" />
  </svg>
);
export default SvgReminder;

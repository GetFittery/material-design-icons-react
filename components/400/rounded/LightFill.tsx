import * as React from "react";
import type { SVGProps } from "react";
const SvgLightFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-120q-63 0-106.5-43.5T330-270H180q-24 0-42-18t-18-42q0-152 93.5-258T450-705v-105q0-13 8.5-21.5T480-840q13 0 21.5 8.5T510-810v105q143 11 236.5 117T840-330q0 24-18 42t-42 18H630q0 63-43.5 106.5T480-120M180-330h600q0-132-87.5-223.5T480-645q-125 0-212.5 91.5T180-330" />
  </svg>
);
export default SvgLightFill;

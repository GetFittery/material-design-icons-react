import * as React from "react";
import type { SVGProps } from "react";
const SvgMerge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-344 277-141q-9 9-21 9t-21-9q-9-9-9-21t9-21l175-175q24-24 32-44t8-59v-265l-69 69q-9 9-21 9t-21-9q-9-9-9-21t9-21l120-120q9-9 21-9t21 9l120 120q9 9 9 21t-9 21q-9 9-21 9t-21-9l-69-69v265q0 39 8 59t32 44l175 175q9 9 9 21t-9 21q-9 9-21 9t-21-9z" />
  </svg>
);
export default SvgMerge;

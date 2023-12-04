import * as React from "react";
import type { SVGProps } from "react";
const SvgEditCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-80v-740h125v-60h65v60h340v-60h65v60h125v320h-60v-70H180v430h320v60zm60-550h600v-130H180zm0 0v-130zM560-80v-123l263-262 122 122L683-80zm300-263-37-37zM620-140h38l121-122-18-19-19-18-122 121zm141-141-19-18 37 37z" />
  </svg>
);
export default SvgEditCalendar;

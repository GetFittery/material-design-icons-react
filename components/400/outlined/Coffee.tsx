import * as React from "react";
import type { SVGProps } from "react";
const SvgCoffee = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M442-242q-116 0-199-80t-83-195v-263q0-25 17.5-42.5T220-840h529q54 0 92.5 37t38.5 91q0 60-37 106t-94 46h-25v43q0 115-83 195t-199 80M220-620h444v-160H220zm222 318q91 0 156.5-62T664-517v-43H220v43q0 91 65.5 153T442-302m282-318h25q33 0 52-28.5t19-63.5q0-29-21-48.5T749-780h-25zM160-120v-60h640v60zm282-440" />
  </svg>
);
export default SvgCoffee;

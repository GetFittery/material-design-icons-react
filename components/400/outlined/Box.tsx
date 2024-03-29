import * as React from "react";
import type { SVGProps } from "react";
const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-674v494h600v-494H640v342l-160-80-160 80v-342zm0 554q-24.75 0-42.375-17.625T120-180v-529q0-9.882 3-19.059 3-9.176 9-16.941l52-71q8-11 20.941-17.5Q217.882-840 232-840h495q14.118 0 27.059 6.5T775-816l53 71q6 7.765 9 16.941 3 9.177 3 19.059v529q0 24.75-17.625 42.375T780-120zm17-614h565l-36.409-46H233zm183 60v245l100-50 100 50v-245zm-200 0h600z" />
  </svg>
);
export default SvgBox;

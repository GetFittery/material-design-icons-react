import * as React from "react";
import type { SVGProps } from "react";
const SvgEnable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-125 69.5-225T332-851q14-5 27.5-1t18.5 17q5 11-.5 22.5T360-796q-99 37-159.5 123.5T140-480q0 142 99 241t241 99q142 0 241-99t99-241q0-106-60.5-192.5T600-796q-12-5-17.5-16.5T582-835q5-13 18.5-17t27.5 1q113 46 182.5 146T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80m-30-368v-401q0-13 8.5-21.5T480-879q13 0 21.5 8.5T510-849v401l107-107q9-9 21-9t21 9q9 9 9 21t-9 21L501-355q-9 9-21 9t-21-9L301-513q-9-9-9-21t9-21q9-9 21-9t21 9z" />
  </svg>
);
export default SvgEnable;

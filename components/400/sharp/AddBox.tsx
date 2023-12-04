import * as React from "react";
import type { SVGProps } from "react";
const SvgAddBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M450-280h60v-170h170v-60H510v-170h-60v170H280v60h170zM120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600z" />
  </svg>
);
export default SvgAddBox;

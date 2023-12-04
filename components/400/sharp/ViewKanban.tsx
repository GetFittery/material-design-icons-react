import * as React from "react";
import type { SVGProps } from "react";
const SvgViewKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M279-277h60v-406h-60zm171-200h60v-206h-60zm171 120h60v-326h-60zM120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600z" />
  </svg>
);
export default SvgViewKanban;

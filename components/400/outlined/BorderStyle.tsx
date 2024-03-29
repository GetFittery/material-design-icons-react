import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M285-120v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zM120-120v-720h720v60H180v660z" />
  </svg>
);
export default SvgBorderStyle;

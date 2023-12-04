import * as React from "react";
import type { SVGProps } from "react";
const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm60-513h600v-147H180zm600 60H180v393h600zm-600-60v60zm0 0v-147zm0 60v393z" />
  </svg>
);
export default SvgToolbar;

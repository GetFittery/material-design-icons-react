import * as React from "react";
import type { SVGProps } from "react";
const SvgScrollableHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm60-60h600v-230H180zm0-290h600v-310H180zm0 0v-310z" />
  </svg>
);
export default SvgScrollableHeader;

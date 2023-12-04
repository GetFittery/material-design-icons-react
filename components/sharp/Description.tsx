import * as React from "react";
import type { SVGProps } from "react";
const SvgDescription = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M14 2H4v20h16V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z" />
  </svg>
);
export default SvgDescription;

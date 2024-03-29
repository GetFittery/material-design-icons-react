import * as React from "react";
import type { SVGProps } from "react";
const SvgStart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-240v-480h60v480zm559 1-43-42 169-169H239v-60h526L597-679l42-42 241 241z" />
  </svg>
);
export default SvgStart;

import * as React from "react";
import type { SVGProps } from "react";
const SvgLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M840-480 642-200H120v-560h522zm-75 0L611-700H180v440h431zm-585 0v220-440z" />
  </svg>
);
export default SvgLabel;

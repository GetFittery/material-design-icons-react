import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M272-120 64-480l208-360h416l208 360-208 360z" />
  </svg>
);
export default SvgHexagonFill;

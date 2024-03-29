import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280z" />
  </svg>
);
export default SvgHomeFill;

import * as React from "react";
import type { SVGProps } from "react";
const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v640zm60-60h680v-436H140zm160-72-42-42 103-104-104-104 43-42 146 146zm190 4v-60h220v60z" />
  </svg>
);
export default SvgTerminal;

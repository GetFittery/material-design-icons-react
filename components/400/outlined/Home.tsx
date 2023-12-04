import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570zm-60 60v-480l320-240 320 240v480H530v-250H430v250zm320-353" />
  </svg>
);
export default SvgHome;

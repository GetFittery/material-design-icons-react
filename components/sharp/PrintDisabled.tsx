import * as React from "react";
import type { SVGProps } from "react";
const SvgPrintDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9.65 7H18V3.01H6v.35zm1.01 1.01 9 8.99H22v-5.99c0-1.66-1.34-3-3-3zM19 10c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M1.41 1.6 0 3.01l5 5c-1.66 0-3 1.33-3 2.99v6h4v4h12l2.95 2.96 1.41-1.41zM8 19.01V15h4l4 4z" />
  </svg>
);
export default SvgPrintDisabled;

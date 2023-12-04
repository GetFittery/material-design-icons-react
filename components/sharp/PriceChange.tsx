import * as React from "react";
import type { SVGProps } from "react";
const SvgPriceChange = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M2 4v16h20V4zm10 6H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2zm4 6.25-2-2h4zM14 10l2-2 2 2z" />
  </svg>
);
export default SvgPriceChange;

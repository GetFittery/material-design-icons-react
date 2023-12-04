import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 4H2v16h20zM9.5 16.5v-9l7 4.5z" />
  </svg>
);
export default SvgSmartDisplay;

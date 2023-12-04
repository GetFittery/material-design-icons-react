import * as React from "react";
import type { SVGProps } from "react";
const SvgViewModule = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M19 11h-3.33V7H19zm-5.33 0h-3.33V7h3.33zM8.33 7v4H5V7zM5 17v-4h3.33v4zm5.33 0v-4h3.33v4zm5.34 0v-4H19v4z"
      opacity={0.3}
    />
    <path d="M3 5v14h18V5zm16 6h-3.33V7H19zm-5.33 0h-3.33V7h3.33zM8.33 7v4H5V7zM5 17v-4h3.33v4zm5.33 0v-4h3.33v4zm5.34 0v-4H19v4z" />
  </svg>
);
export default SvgViewModule;

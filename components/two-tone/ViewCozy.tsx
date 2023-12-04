import * as React from "react";
import type { SVGProps } from "react";
const SvgViewCozy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M4 18h16V6H4zm8.75-10.75h4v4h-4zm0 5.5h4v4h-4zm-5.5-5.5h4v4h-4zm0 5.5h4v4h-4z"
      opacity={0.3}
    />
    <path d="M7.25 7.25h4v4h-4zm5.5 0h4v4h-4zm-5.5 5.5h4v4h-4zm5.5 0h4v4h-4z" />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z" />
  </svg>
);
export default SvgViewCozy;
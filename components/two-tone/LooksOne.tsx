import * as React from "react";
import type { SVGProps } from "react";
const SvgLooksOne = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 5H5v14h14zm-5 12h-2V9h-2V7h4z" opacity={0.3} />
    <path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5zm5 4h2v8h2V7h-4z" />
  </svg>
);
export default SvgLooksOne;

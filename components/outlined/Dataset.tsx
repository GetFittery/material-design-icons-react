import * as React from "react";
import type { SVGProps } from "react";
const SvgDataset = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M7 13h4v4H7zm6 0h4v4h-4z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z" />
    <path d="M7 7h4v4H7zm6 0h4v4h-4z" />
  </svg>
);
export default SvgDataset;

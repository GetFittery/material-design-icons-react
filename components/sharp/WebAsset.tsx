import * as React from "react";
import type { SVGProps } from "react";
const SvgWebAsset = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 4v16h18V4zm16 14H5V8h14z" />
  </svg>
);
export default SvgWebAsset;

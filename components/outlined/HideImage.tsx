import * as React from "react";
import type { SVGProps } from "react";
const SvgHideImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2z" />
  </svg>
);
export default SvgHideImage;

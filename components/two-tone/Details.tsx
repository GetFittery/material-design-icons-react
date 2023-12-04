import * as React from "react";
import type { SVGProps } from "react";
const SvgDetails = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M13 8.92 18.6 19H13zm-2 0V19H5.4z" opacity={0.3} />
    <path d="M12 3 2 21h20zm1 5.92L18.6 19H13zm-2 0V19H5.4z" />
  </svg>
);
export default SvgDetails;

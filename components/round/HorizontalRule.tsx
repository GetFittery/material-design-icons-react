import * as React from "react";
import type { SVGProps } from "react";
const SvgHorizontalRule = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1"
    />
  </svg>
);
export default SvgHorizontalRule;

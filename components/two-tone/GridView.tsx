import * as React from "react";
import type { SVGProps } from "react";
const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M5 5h4v4H5zm0 10h4v4H5zm10 0h4v4h-4zm0-10h4v4h-4z" opacity={0.3} />
    <path d="M3 21h8v-8H3zm2-6h4v4H5zm-2-4h8V3H3zm2-6h4v4H5zm8 16h8v-8h-8zm2-6h4v4h-4zM13 3v8h8V3zm6 6h-4V5h4z" />
  </svg>
);
export default SvgGridView;

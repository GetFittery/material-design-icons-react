import * as React from "react";
import type { SVGProps } from "react";
const SvgAutoAwesomeMosaic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M5 5h4v14H5zm10 10h4v4h-4zm0-10h4v4h-4z" opacity={0.3} />
    <path d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2m6 14H5V5h4zM19 3h-6v8h8V5c0-1.1-.9-2-2-2m0 6h-4V5h4zm-6 12h6c1.1 0 2-.9 2-2v-6h-8zm2-6h4v4h-4z" />
  </svg>
);
export default SvgAutoAwesomeMosaic;
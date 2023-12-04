import * as React from "react";
import type { SVGProps } from "react";
const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M20 17.17V4H4v12h14.83zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"
      opacity={0.3}
    />
    <path d="M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M4 4h16v13.17L18.83 16H4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
  </svg>
);
export default SvgComment;

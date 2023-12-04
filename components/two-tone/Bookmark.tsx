import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m7 17.97 5-2.15 5 2.15V5H7z" opacity={0.3} />
    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 14.97-5-2.14-5 2.14V5h10z" />
  </svg>
);
export default SvgBookmark;

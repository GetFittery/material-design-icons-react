import * as React from "react";
import type { SVGProps } from "react";
const SvgNote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m22 10-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99zm-7-4.5 5.5 5.5H15z" />
  </svg>
);
export default SvgNote;
import * as React from "react";
import type { SVGProps } from "react";
const SvgNote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m22 10-6-6H2v16h20zm-7-4.5 5.5 5.5H15z" />
  </svg>
);
export default SvgNote;

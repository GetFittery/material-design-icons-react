import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20 2H4v20h16zM6 4h5v8l-2.5-1.5L6 12z" />
  </svg>
);
export default SvgBook;

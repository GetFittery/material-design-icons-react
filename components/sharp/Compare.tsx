import * as React from "react";
import type { SVGProps } from "react";
const SvgCompare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M10 3H3v18h7v2h2V1h-2zm0 15H5l5-6zM21 3h-7v2h5v13l-5-6v9h7z" />
  </svg>
);
export default SvgCompare;

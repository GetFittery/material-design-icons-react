import * as React from "react";
import type { SVGProps } from "react";
const SvgSplitscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 4v5H6V4zm2-2H4v9h16zm-2 13v5H6v-5zm2-2H4v9h16z" />
  </svg>
);
export default SvgSplitscreen;

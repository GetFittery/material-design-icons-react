import * as React from "react";
import type { SVGProps } from "react";
const SvgFitScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M17 4h5v5h-2V6h-3zM4 9V6h3V4H2v5zm16 6v3h-3v2h5v-5zM7 18H4v-3H2v5h5zM18 8H6v8h12z" />
  </svg>
);
export default SvgFitScreen;
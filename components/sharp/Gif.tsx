import * as React from "react";
import type { SVGProps } from "react";
const SvgGif = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M11.5 9H13v6h-1.5zM10 9H5v6h5v-3H8.5v1.5h-2v-3H10zm9 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z" />
  </svg>
);
export default SvgGif;
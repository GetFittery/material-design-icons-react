import * as React from "react";
import type { SVGProps } from "react";
const SvgArtTrack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 13h-8v-2h8zm0-6h-8v2h8zm-8 10h8v-2h-8zM12 7v10H2V7zm-1.5 8-2.25-3-1.75 2.26-1.25-1.51L3.5 15z" />
  </svg>
);
export default SvgArtTrack;
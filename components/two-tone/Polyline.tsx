import * as React from "react";
import type { SVGProps } from "react";
const SvgPolyline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 4h2v2h-2zM7 14H5v-2h2zm12 6h-2v-2h2z" opacity={0.3} />
    <path d="M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6zM12 4h2v2h-2zM7 14H5v-2h2zm12 6h-2v-2h2z" />
  </svg>
);
export default SvgPolyline;
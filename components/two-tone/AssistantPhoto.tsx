import * as React from "react";
import type { SVGProps } from "react";
const SvgAssistantPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m14.24 12 .4 2H18V8h-5.24l-.4-2H7v6z" opacity={0.3} />
    <path d="M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7z" />
  </svg>
);
export default SvgAssistantPhoto;

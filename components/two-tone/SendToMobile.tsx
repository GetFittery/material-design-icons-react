import * as React from "react";
import type { SVGProps } from "react";
const SvgSendToMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M7 3h10v1H7zm0 17h10v1H7z" opacity={0.3} />
    <path d="m22 12-4-4v3h-5v2h5v3zm-5 6H7V6h10v1h2V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zM7 3h10v1H7zm10 18H7v-1h10z" />
  </svg>
);
export default SvgSendToMobile;
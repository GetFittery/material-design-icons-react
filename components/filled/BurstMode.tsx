import * as React from "react";
import type { SVGProps } from "react";
const SvgBurstMode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1M11 17l2.5-3.15L15.29 16l2.5-3.22L21 17z" />
  </svg>
);
export default SvgBurstMode;

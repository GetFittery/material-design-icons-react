import * as React from "react";
import type { SVGProps } from "react";
const SvgBattery5Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 6h6v4H9z" opacity={0.3} />
    <path d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1m-2 1H9v4h6z" />
  </svg>
);
export default SvgBattery5Bar;

import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashlightOn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 2H6v6l2 3v11h8V11l2-3zm-2 2v1H8V4zm-2 6.4V20h-4v-9.61l-2-3V7h8v.39z" />
    <circle cx={12} cy={14} r={1.5} />
  </svg>
);
export default SvgFlashlightOn;
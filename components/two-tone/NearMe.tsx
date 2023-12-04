import * as React from "react";
import type { SVGProps } from "react";
const SvgNearMe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="m11.39 12.61.32.83 1.32 3.42 4.24-10.13-10.13 4.24 3.42 1.33z"
      opacity={0.3}
    />
    <path d="m3 11.51 6.84 2.65L12.48 21h.98L21 3 3 10.53zm14.27-4.78-4.24 10.13-1.32-3.42-.32-.83-.82-.32-3.43-1.33z" />
  </svg>
);
export default SvgNearMe;
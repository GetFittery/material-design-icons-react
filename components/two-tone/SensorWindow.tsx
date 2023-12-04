import * as React from "react";
import type { SVGProps } from "react";
const SvgSensorWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 4v7h-4v-1h-4v1H6V4zM6 20v-7h12v7z" opacity={0.3} />
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 2v7h-4v-1h-4v1H6V4zM6 20v-7h12v7z" />
  </svg>
);
export default SvgSensorWindow;
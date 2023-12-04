import * as React from "react";
import type { SVGProps } from "react";
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M14 14v1.17L17.17 12 14 8.83V10H6v4z" opacity={0.3} />
    <path d="m20 12-8-8v4H4v8h8v4zM6 14v-4h8V8.83L17.17 12 14 15.17V14z" />
  </svg>
);
export default SvgForward;
import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 2.53-2.54 3.75 3.75z" />
  </svg>
);
export default SvgBorderColor;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBalcony = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M7 16H5v4h2zm4 0H9v4h2zm-5-6v4h5V4.08C8.16 4.56 6 7.03 6 10m4 2H8v-2h2zm3-7.92V14h5v-4c0-2.97-2.16-5.44-5-5.92M16 12h-2v-2h2zm-1 4h-2v4h2zm4 0h-2v4h2z"
      opacity={0.3}
    />
    <path d="M10 10v2H8v-2zm6 2v-2h-2v2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4zM7 16H5v4h2zm4 0H9v4h2zm0-11.92C8.16 4.56 6 7.03 6 10v4h5zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92zm2 2h-2v4h2zm4 0h-2v4h2z" />
  </svg>
);
export default SvgBalcony;

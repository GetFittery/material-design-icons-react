import * as React from "react";
import type { SVGProps } from "react";
const SvgFrameSource = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M344-350 214-480l130-130 42 43-87 87 87 87zm272 0-42-43 87-87-87-87 42-43 130 130zM120-120v-232h60v172h172v60zm488 0v-60h172v-172h60v232zM120-608v-232h232v60H180v172zm660 0v-172H608v-60h232v232z" />
  </svg>
);
export default SvgFrameSource;

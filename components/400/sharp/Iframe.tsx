import * as React from "react";
import type { SVGProps } from "react";
const SvgIframe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M460-420h200v-80H460zm-60 60v-200h320v200zM80-160v-640h800v640zm60-60h680v-436H140z" />
  </svg>
);
export default SvgIframe;

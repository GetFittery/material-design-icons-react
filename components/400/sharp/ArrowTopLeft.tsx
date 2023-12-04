import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowTopLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M700-160v-415H274l162 162-43 43-233-233 234-237 43 43-162 162h485v475z" />
  </svg>
);
export default SvgArrowTopLeft;
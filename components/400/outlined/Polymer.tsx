import * as React from "react";
import type { SVGProps } from "react";
const SvgPolymer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M198-160 20-480l180-320h137L158-480l120 216 329-536h152l181 320-180 320H623l179-320-121-214-327 534z" />
  </svg>
);
export default SvgPolymer;

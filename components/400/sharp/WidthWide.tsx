import * as React from "react";
import type { SVGProps } from "react";
const SvgWidthWide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v640zm60-60h110v-520H140zm170 0h340v-520H310zm400 0h110v-520H710zM310-740v520z" />
  </svg>
);
export default SvgWidthWide;

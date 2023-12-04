import * as React from "react";
import type { SVGProps } from "react";
const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v640zm60-60h461v-163H140zm521 0h159v-386H661zM140-443h461v-163H140z" />
  </svg>
);
export default SvgWeb;

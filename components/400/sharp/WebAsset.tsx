import * as React from "react";
import type { SVGProps } from "react";
const SvgWebAsset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v640zm60-60h680v-436H140z" />
  </svg>
);
export default SvgWebAsset;

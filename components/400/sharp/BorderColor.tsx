import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80 0v-121h800V0zm140-301h44l391-391-22-22-22-22-391 391zm-60 60v-128l536-536 128 128-536 536zm576-537-41-41zm-81 86-22-22-22-22z" />
  </svg>
);
export default SvgBorderColor;

import * as React from "react";
import type { SVGProps } from "react";
const SvgTab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-220h680v-347H524v-173H140zm-60 60v-640h800v640zm60-60v-520z" />
  </svg>
);
export default SvgTab;

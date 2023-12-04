import * as React from "react";
import type { SVGProps } from "react";
const SvgDataObject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M570-160v-60h170v-245h80v-30h-80v-245H570v-60h230v249h80v142h-80v249zm-410 0v-249H80v-142h80v-249h230v60H220v245h-80v30h80v245h170v60z" />
  </svg>
);
export default SvgDataObject;

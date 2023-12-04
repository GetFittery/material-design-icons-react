import * as React from "react";
import type { SVGProps } from "react";
const SvgPalletFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-80v-80h800v80h-80v-40H520v40h-80v-40H160v40zm120-240v-560h560v560zm160-340h240v-40H360z" />
  </svg>
);
export default SvgPalletFill;

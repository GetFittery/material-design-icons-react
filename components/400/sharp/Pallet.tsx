import * as React from "react";
import type { SVGProps } from "react";
const SvgPallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-80v-80h800v80h-80v-40H520v40h-80v-40H160v40zm120-240v-560h560v560zm40-40h480v-480H240zm120-300h240v-40H360zM240-360v-480z" />
  </svg>
);
export default SvgPallet;

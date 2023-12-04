import * as React from "react";
import type { SVGProps } from "react";
const SvgDryFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M760-80H80v-427l374-241 54 54-84 134h376v60H480v80h400v60H480v80h360v60H480v80h280zM619-650q6-39-3-68t-38-67q-25-32-33-65t-1-80h56q-8 40 .5 66.5T643-791q24 32 32 64.5t1 76.5zm160 0q6-39-3-68t-38-67q-25-32-33-65t-1-80h56q-8 40 .5 66.5T803-791q24 32 32 64.5t1 76.5z" />
  </svg>
);
export default SvgDryFill;

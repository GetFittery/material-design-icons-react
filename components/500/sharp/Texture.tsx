import * as React from "react";
import type { SVGProps } from "react";
const SvgTexture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M114.261-114.261v-50.978l683.5-680.5H845.5v49.978l-684.261 681.5zm-.239-272.26v-97.957l361.5-361.74h97.957zm0-320.957v-138.74h138.5zm593.456 593.456 138.74-138.5v138.5zm-320.957 0 459.697-459.457v97.957l-361.74 361.5z" />
  </svg>
);
export default SvgTexture;

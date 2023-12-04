import * as React from "react";
import type { SVGProps } from "react";
const SvgCake = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-80v-319h87v-242h243v-64q-20-14-30.5-30.534T409-775.411q0-14.589 5.5-28.089Q420-817 430-827l50-53 50 53q10 10 16 23.5t6 28.089q0 23.343-11 39.877Q530-719 510-705v64h243v242h87v319zm147-319h426v-182H267zm-87 259h600v-199H180zm87-259h426zm-87 259h600zm600-259H180z" />
  </svg>
);
export default SvgCake;

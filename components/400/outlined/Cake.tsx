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
    <path d="M160-80q-17 0-28.5-11.5T120-120v-219q0-24.75 17.625-42.375T180-399h27v-182q0-24.75 17.625-42.375T267-641h183v-64q-20-14-30.5-30.534T409-775.411q0-14.589 5.5-28.089Q420-817 430-827l50-53 50 53q10 10 16 23.5t6 28.089q0 23.343-11 39.877Q530-719 510-705v64h183q24.75 0 42.375 17.625T753-581v182h27q24.75 0 42.375 17.625T840-339v219q0 17-11.5 28.5T800-80zm107-319h426v-182H267zm-87 259h600v-199H180zm87-259h426zm-87 259h600zm600-259H180z" />
  </svg>
);
export default SvgCake;

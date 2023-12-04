import * as React from "react";
import type { SVGProps } from "react";
const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M112.587-182.152v-380.696q0-28.447 19.961-48.408 19.961-19.962 48.409-19.962h149.499v-149.26q0-28.448 19.891-48.409t48.24-19.961h380.456q28.448 0 48.409 19.961t19.961 48.409v598.326q0 28.349-19.961 48.24-19.961 19.89-48.409 19.89H180.957q-28.448 0-48.409-19.89-19.961-19.891-19.961-48.24m517.196 0h149.26v-598.326H398.587v149.26h162.826q28.448 0 48.409 19.962 19.961 19.961 19.961 48.408zm-231.196 0h162.826v-380.696H398.587zm-217.63 0h149.499v-380.696H180.957z" />
  </svg>
);
export default SvgResponsiveLayout;

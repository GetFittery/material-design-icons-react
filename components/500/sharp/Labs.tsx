import * as React from "react";
import type { SVGProps } from "react";
const SvgLabs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M479.948-67.565q-84.893 0-144.692-59.899-59.8-59.899-59.8-144.884v-371.239h-80v-248.848h569.327v248.848h-80v371.239q0 84.985-59.971 144.884-59.97 59.9-144.864 59.9Zm-218.035-642h436.413v-116.413H261.913zm218.15 575.543q49.699 0 86.503-30.163t48.043-76.728H476.891v-66.457h141.435v-60H476.891v-66.456h141.435v-60H476.891v-66.457h141.435v-82.826H341.913v370.761q0 57.816 40.294 98.071 40.294 40.255 97.856 40.255m-218.15-575.543v-116.413z" />
  </svg>
);
export default SvgLabs;

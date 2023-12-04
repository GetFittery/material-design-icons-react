import * as React from "react";
import type { SVGProps } from "react";
const SvgCurtains = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-180v-600q0-24.75 17.625-42.375T220-840h520q24.75 0 42.375 17.625T800-780v600h50q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T850-120H110q-12.75 0-21.375-8.675Q80-137.351 80-150.175 80-163 88.625-171.5T110-180zm60 0h168q-8-74-49-148t-119-95zm0-600v244q78-21 118.5-95.5T387-780zm22 300q94 29 146.5 117.5T449-180h62q8-94 60-182.5T717-480q-94-29-146-117.5T511-780h-63q-8 94-60 182.5T242-480m498-300H572q8 74 49 148.5T740-536zm0 600v-244q-78 21-119 95.5T572-180zM220-780v244zm520 0v244zm0 600v-244zm-520 0v-243z" />
  </svg>
);
export default SvgCurtains;

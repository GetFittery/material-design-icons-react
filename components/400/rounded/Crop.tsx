import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M695-70v-135H265q-24 0-42-18t-18-42v-430H70q-12.75 0-21.375-8.675Q40-712.351 40-725.175 40-738 48.625-746.5T70-755h135v-135q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T265-890v625h625q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-205H755v135q0 12.75-8.675 21.375Q737.649-40 724.825-40 712-40 703.5-48.625T695-70m0-255v-370H325v-60h370q24 0 42 18t18 42v370z" />
  </svg>
);
export default SvgCrop;

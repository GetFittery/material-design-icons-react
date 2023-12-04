import * as React from "react";
import type { SVGProps } from "react";
const SvgDragHandleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M188.087-381.869q-14.424 0-24.245-9.872-9.82-9.871-9.82-24.369 0-14.499 9.82-24.194Q173.663-450 188.087-450h583.826q14.424 0 24.364 9.871 9.941 9.871 9.941 24.37 0 14.498-9.941 24.194-9.94 9.696-24.364 9.696zm0-128.131q-14.424 0-24.245-9.871-9.82-9.871-9.82-24.37 0-14.498 9.82-24.314 9.821-9.815 24.245-9.815h583.826q14.424 0 24.364 9.991 9.941 9.991 9.941 24.489 0 14.499-9.941 24.194-9.94 9.696-24.364 9.696z" />
  </svg>
);
export default SvgDragHandleFill;

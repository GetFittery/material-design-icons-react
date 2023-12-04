import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowInsert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M306-658v348q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T246-310v-420q0-12.75 8.625-21.375T276-760h420q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T696-700H348l391 391q9 9 9 21t-9 21q-9 9-21 9t-21-9z" />
  </svg>
);
export default SvgArrowInsert;

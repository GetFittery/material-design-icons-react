import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140 0q-24.75 0-42.375-17.885T80-60.885Q80-86 97.919-103.5 115.838-121 141-121h679q24.75 0 42.375 17.677T880-60.823Q880-36 862.081-18T819 0zm80-301h44l391-391-22-22-22-22-391 391zm-60 29.938v-84.926q0-6.012 2-11.512 2-5.5 7-10.5l485-485q9-9 20-13t22-4q11 0 22.5 4t19.5 13l44 44q9 8 13.5 19.5t4.5 22.855q0 10.645-4.304 21.608Q791.391-744.073 782-735L297-250q-5 5-10.217 7-5.218 2-10.783 2h-85.673q-12.889 0-21.608-8.643Q160-258.286 160-271.062M736-778l-41-41zm-81 86-22-22-22-22z" />
  </svg>
);
export default SvgBorderColor;

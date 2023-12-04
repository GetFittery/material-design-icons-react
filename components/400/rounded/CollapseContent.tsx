import * as React from "react";
import type { SVGProps } from "react";
const SvgCollapseContent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M380-380H230q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-440h180q12.75 0 21.375 8.625T440-410v180q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T380-230zm200-200h150q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730-520H550q-12.75 0-21.375-8.625T520-550v-180q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T580-730z" />
  </svg>
);
export default SvgCollapseContent;

import * as React from "react";
import type { SVGProps } from "react";
const SvgInkPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m480-522 42 42 249-249-42-42zM180-180h42l258-258-42-42-258 258zm362-238L418-542l198-198-30-30-234 234-43-43 278-278 73 73 70-70 124 124zM244-120H120v-124l298-298 124 124z" />
  </svg>
);
export default SvgInkPen;

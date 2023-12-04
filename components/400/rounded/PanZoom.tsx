import * as React from "react";
import type { SVGProps } from "react";
const SvgPanZoom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M223-180h97q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T320-120H150q-12.75 0-21.375-8.625T120-150v-170q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T180-320v97l127-127q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5zm557-557L654-611q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l125-125h-97q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T640-840h170q12.75 0 21.375 8.625T840-810v170q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T780-640z" />
  </svg>
);
export default SvgPanZoom;

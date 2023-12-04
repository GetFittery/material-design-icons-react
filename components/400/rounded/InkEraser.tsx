import * as React from "react";
import type { SVGProps } from "react";
const SvgInkEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M678-220h173q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T851-160H618zm-486 60q-5.913 0-11.457-2Q175-164 170-169l-72-75q-18-17-17.5-41.5T97-327l458-498q16-17 40.567-17 24.566 0 41.433 17l205 215q17 17 18 42t-16 42L512-170q-4.552 5-10.241 7.5-5.69 2.5-11.759 2.5zm288-60 324-352-207-217-455 503 64 66zm0-260" />
  </svg>
);
export default SvgInkEraser;
